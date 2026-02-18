type OwnershipMatch = {
  who: string;
  what: string;
};

export type OwnershipMatches = Array<OwnershipMatch>;

/**
 * Parses a string for ownership/possession patterns:
 *  a) word:word/s     — "bob:schedule" | "bob:meetings next week"
 *  b) joint possessives — "bob's and maryam's summer house" | "bob and maryam's summer house"
 *  c) word's word/s   — "bob's adidas shoes"
 *  d) @word word/s    — "@bob adidas shoes"
 *  e) possessive my*  — "my adidas shoes" (who = "me")
 */
export function parseOwnershipPatterns(input: string): OwnershipMatches {
  const results: OwnershipMatches = [];
  const acceptedRanges: Array<{ start: number; end: number }> = [];

  // const WHO_WHITELIST = new Set(["all", "everybody", "active"]);

  function normalizeOwners(ownerChunk: string) {
    const parts = ownerChunk
      .split(/\s*(?:and|&|,|or)\s*/i)
      .map((p) => p.trim())
      .filter(Boolean);

    const names: string[] = parts
      .map((part) => {
        const m = part.match(/([A-Za-z0-9_-]+)(?:'s)?/);
        return m ? m[1] : null;
      })
      .filter(Boolean) as string[];

    return names.join(" and ");
  }

  function overlapsExisting(start: number, end: number) {
    return acceptedRanges.some(
      ({ start: s, end: e }) => !(end <= s || start >= e),
    );
  }

  const patterns: Array<{
    regex: RegExp;
    extract: (m: RegExpExecArray) => OwnershipMatch | null;
  }> = [
    {
      regex:
        /\b(\w+):([^\s:@][^\n:@]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,
      extract: (m) => {
        const who = m[1];
        return { who, what: (m[2] || "").trim() };
      },
    },
    {
      regex:
        /\b((?:\w+(?:'s)?)(?:\s*(?:and|&|,|or)\s*(?:\w+(?:'s)?))+)\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,
      extract: (m) => {
        const ownerChunk = m[1];
        const what = (m[2] || "").trim();
        if (!ownerChunk || !what) return null;
        const who = normalizeOwners(ownerChunk);
        return { who, what };
      },
    },
    {
      regex: /\b(\w+)'s\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,
      extract: (m) => {
        const who = m[1];
        const what = (m[2] || "").trim();
        if (!who || !what) return null;
        return { who, what };
      },
    },
    {
      regex: /@(\w+)\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,
      extract: (m) => ({ who: m[1], what: (m[2] || "").trim() }),
    },
    {
      regex: /\bmy\s+(\w[\w\s]*?)(?=\s*(?:\b\w+:|@\w+|\w+'s\b|my\b)|$)/gi,
      extract: (m) => ({ who: "me", what: (m[1] || "").trim() }),
    },
  ];

  // NOTE: use RegExpExecArray so `.index` is a number (not possibly undefined)
  for (const { regex, extract } of patterns) {
    let match: RegExpExecArray | null = null;
    regex.lastIndex = 0;
    while ((match = regex.exec(input)) !== null) {
      // match.index is a guaranteed number on RegExpExecArray
      const start: number = match.index;
      const fullMatch = match[0] as string;
      const end: number = start + fullMatch.length;

      if (overlapsExisting(start, end)) continue;

      const result = extract(match);
      if (result && result.what) {
        results.push(result);
        acceptedRanges.push({ start, end });
      }
    }
  }

  return results;
}

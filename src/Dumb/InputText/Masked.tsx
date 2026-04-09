import useMaskedDateInput from "./useMaskedInput";

/*
<MaskedField
  id="masked-expiry"
  label="Expiry Date (MM/YY)"
  mask="MM/YY"
  required
/>

<MaskedField
  id="masked-date"
  label="Date of Birth (DD/MM/YYYY)"
  mask="DD/MM/YYYY"
  required
/>

<MaskedField
  id="masked-iso"
  label="Date"
  mask="YYYY-MM-DD"
  required
/>
*/

type MaskedFieldProps = {
  id: string;
  label: string;
  mask: "MM/YY" | "DD/MM/YYYY" | "YYYY-MM-DD";
  required?: boolean;
};

export function MaskedField({ id, label, mask, required }: MaskedFieldProps) {
  const { inputRef, feedback, feedbackId } = useMaskedDateInput({ mask });

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        id={id}
        type="text"
        inputMode="numeric"
        placeholder={mask}
        maxLength={mask.length}
        required={required}
        aria-invalid={feedback ? "true" : undefined}
        aria-describedby={feedback ? feedbackId : undefined}
      />
      <p id={feedbackId}>{feedback}</p>
    </>
  );
}

export default function OTCInput() {
  return (
    <>
      <label htmlFor="onetimecode">Enter code:</label>
      <input
        name="onetimecode"
        id="code"
        type="text"
        autoComplete="one-time-code"
      />
    </>
  );
}

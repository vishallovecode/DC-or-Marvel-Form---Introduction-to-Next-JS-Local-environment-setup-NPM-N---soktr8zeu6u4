"use client";
function Summary({ formData }) {
  return (
    <div id="summary">
      <h2>Summary</h2>
      <p>Form Type: {formData["Form Type"]} </p>
      <p>Age: {formData?.Age}</p>

      <p>DC Shows: {formData["DC Shows"]}</p>
      <p>Marvel Shows: {formData["Marvel Shows"]}</p>
    </div>
  );
}
export default Summary;

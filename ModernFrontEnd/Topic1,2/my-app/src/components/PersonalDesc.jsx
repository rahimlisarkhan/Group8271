function PersonalDesc({ edu, desc, startDate = "2024" }) {
  return (
    <div>
      <p>Education: {edu}</p>
      <p>{desc}</p>
      <p>{startDate}</p>
    </div>
  );
}

export default PersonalDesc;

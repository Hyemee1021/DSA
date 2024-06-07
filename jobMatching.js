function match(candidate, job) {
  // is this job a valid match for the candidate?

  //csdidate's  minimum salary === undefined-throw error
  if (!candidate.minSalary) {
    throw new Error("Put candidate's minimum salary");
  }
  //job's maximum salry=== undefined throw error
  if (!job.maxSalary) {
    throw new Error("Put job's maxium salary");
  }

  //wiggleRoom- candidate's minium - 10%

  const wiggleRoom = candidate.minSalary / 10;

  //update candidate's minimum
  candidate.minSalary = candidate.minSalary - wiggleRoom;

  //return boolean
  //candidate'minimum salary <=jpb's maxium salary- valid
  if (candidate.minSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}

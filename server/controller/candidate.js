import Candidate from "../model/candidate";
export const register_candidate = async (newCandidate) => {
  try {
    const candidate = new Candidate({
      name: newCandidate.name,
      age: newCandidate.age,
      profile_url:newCandidate.profile_url,
      year_experience: newCandidate.year_experience,
      graduate: newCandidate.graduate,
      gender: newCandidate.gender,
      about_experience: newCandidate.about_experience,
      status: newCandidate.status,
    });
    return await candidate.save();
  } catch (error) {
    throw error;
  }
};

export const fetchCandidate = async () => {
  try {
    return await Candidate.find({});
  } catch (error) {
    throw error;
  }
};

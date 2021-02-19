import { CREATED, OK } from "http-status";
import { fetchCandidate, register_candidate } from "../controller/candidate";



export const register = async (req, res, next) => {
    try {
      const candidate = await register_candidate(req.body);
     
      return res.status(CREATED).send({
        message: 'Candidate created successfully',
        status: true,
        candidate: candidate,
      });
    } catch (error) {
      console.log(error);
      return res.status(BAD_REQUEST).send({ status: false, error });
    }
  };
export const getCandidate = async (req, res, next) => {
    try {
      const candidate = await fetchCandidate(req.body);
     
      return res.status(OK).send({
        message: 'Candidate fetched successfully',
        status: true,
        candidate: candidate,
      });
    } catch (error) {
      console.log(error);
      return res.status(BAD_REQUEST).send({ status: false, error });
    }
  };
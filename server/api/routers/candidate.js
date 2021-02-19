import {Router} from 'express';
import {Joi, celebrate, Segments, errors} from 'celebrate';
import { register, getCandidate} from '../../services/candidate';


/**
 * This router to candidate
 */
export default (app) =>{
    const router = Router();
    app.use('/candidate', router);
  
    router.route('/').post(
        celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                age: Joi.number().required(),
                year_experience: Joi.number().required(),
                graduate: Joi.string().required(),
                gender: Joi.string().required(),
                profile_url: Joi.string().required(),
                about_experience:Joi.string().required(),
                status:Joi.string()
            })
        }),
        register
    );
    router.route('/').get(getCandidate);
    app.use(errors());
};
import * as Yup from 'yup';
import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      height: Yup.number().required(),
      weigth: Yup.numbet().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { name, email, age, height, weigth } = await Students.create(
      req.body
    ).catch(function(err) {
      console.log(err);
    });

    const student = Students.findOne({ where: { email } });

    const id = student;

    return res.json({
      student: {
        id,
        name,
        email,
        age,
        height,
        weigth,
      },
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      height: Yup.number().required(),
      weigth: Yup.numbet().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fai  led' });
    }

    const { name, email } = req.body;

    const student = Students.findOne(req.email);

    const { age, height, weigth } = await student.update(req.body);

    return res.json({ name, email, age, height, weigth });
  }
}

export default new StudentsController();

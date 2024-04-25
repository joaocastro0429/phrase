import { Request, Response, request, response } from "express";
import { Pharses } from "../models/Pharses";
import { sequelize } from "../instances/databse";

export const SearchPharses = async (request: Request, response: Response) => {
  const list = await Pharses.findAll();
  console.log(list);
  response.status(200).json(list);
};
export const PhrasesCreate = async (request: Request, response: Response) => {
  const { author, txt } = request.body;

  await Pharses.create({
    author,
    txt,
  });

  return response.json({ author, txt });
};

export const SearchOne = async (request: Request, response: Response) => {
  const { id } = request.params;
  const searchOne = await Pharses.findOne({ where: { id: parseInt(id) } });

  return response.json(searchOne);
};

export const phraseUpdate = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { author, txt } = request.body;
  const phrase = await Pharses.findOne({ where: { id: parseInt(id) } });
  if (phrase) {
    phrase.author = author;
    phrase.txt = txt;

    await phrase.save();
  }

  response.status(200).json({ msg: "Frase atualizado com sucesso", phrase });
};

export const phraseDelete = async (request: Request, response: Response) => {
  const { id } = request.params;
  await Pharses.destroy({ where: { id: parseInt(id) } });

  response.status(200).json({ msg: "Frase deletado com sucesso" });
};

export const phraseRandom = async (request: Request, response: Response) => {
  const phrase = await Pharses.findAll({ order: sequelize.random() });

  response.status(200).json({ phrase });
};

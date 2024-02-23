import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const create = (name, email, avatar) => {
  return prisma.user.create({ data: { name, email, avatar } });
};

const findUnique = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const findMany = () => {
  return prisma.user.findMany();
};

const remove = (id) => {
  return prisma.user.delete({ where: { id } });
};

const update = (id, name, email, avatar) => {
  return prisma.user.update({ data: { name, email, avatar }, where: { id } });
};
export default { create, findUnique, findMany, remove, update };

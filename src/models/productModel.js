import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const create = (name, price, quantity, foto) => {
  return prisma.product.create({ data: { name, price, quantity, foto } });
};
const findUnique = (id) => {
  return prisma.product.findUnique({ where: { id } });
};

const findMany = () => {
  return prisma.product.findMany();
};

const remove = (id) => {
  return prisma.product.delete({ where: { id } });
};
const update = (id, name, price, quantity, foto) => {
  return prisma.product.update({
    data: { name, price, quantity, foto },
    where: { id },
  });
};

export default { create, findUnique, findMany, remove, update };

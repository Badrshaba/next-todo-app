"use server";
import { ITodo } from "@/types";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const getToDoListAction = async () => {
  return await prisma.todo.findMany({orderBy:{createAt:"desc"}});
};
export const createToDoListAction = async ({
  title,
  body,
  completed,
}: {
  title: string;
  body?: string;
  completed: boolean;
}) => {

  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath('/')
};
export const updateDoListAction = async ({id,title,body,completed}:ITodo) => {
  await prisma.todo.update({
    where:{
      id
    },
    data:{
      title,
      body,
      completed
    }

  })
  revalidatePath('/')
};
export const deleteToDoListAction = async (id:string) => {
  await prisma.todo.delete({
    where:{
      id
    }
  })
  revalidatePath('/')
};

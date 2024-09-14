import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {faker} from "@faker-js/faker"
import colors from "tailwindcss/colors"
import { NextResponse } from "next/server";
import route, { baseUrl } from "../../config/route";

export async function Get() {
  const {getUser} =  getKindeServerSession()
  const user = await getUser()

  if(!user || !user.id) {
    throw new Error(`Something went wrong with the authentication: ${user}`)
  }

  //check the user exists in the db
  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id
    }
  })

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        displayName: user.username ?? user.given_name + ' ' + user.family_name ?? faker.internet.userName(),
        email: user.email ?? "",
        color: faker.helpers.arrayElement([
          colors.green["500"],
          colors.yellow["500"],
          colors.rose["500"],
          colors.red["500"],
          colors.purple["500"],
        ])
      }
    })
  }
  return NextResponse.redirect(`${baseUrl}${route.dashboard}`)
}
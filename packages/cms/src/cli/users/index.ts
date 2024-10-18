import type { Arguments } from "yargs-parser";
import { getConfig } from "../config";
import bcrypt from "bcrypt";
import inquirer from "inquirer";
import { User, userSchema } from "@citium/types/user";
import * as colors from "kleur/colors";

export const users = async (flags: Arguments) => {
  const command = flags._[3];

  if (command === "create") {
    createUser();
  }
};

const createUser = async () => {
  const { adapter } = await getConfig();

  const {
    username: usernameSchema,
    password: passwordSchema,
    role: roleSchema,
  } = userSchema.shape;

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter a username",
      validate: (value) => {
        const result = usernameSchema.safeParse(value);
        return result.success;
      },
    },
    {
      type: "password",
      name: "password",
      message: "Enter a  password",
      validate: (value) => {
        const result = passwordSchema.safeParse(value);
        return result.success;
      },
    },
    {
      type: "list",
      name: "role",
      message: "Select a role",
      choices: roleSchema.options,
    },
  ]);

  const { username, password, role } = answers as Pick<
    User,
    "username" | "password" | "role"
  >;

  const hashedPassword = bcrypt.hashSync(password, 13);

  const success = await adapter.createUser({
    username,
    password: hashedPassword,
    role,
  });

  if (success) {
    console.log(colors.green("User created successfully"));
  } else {
    console.log(colors.red("User  creation failed"));
  }
};

"use client";
import React from "react";
import styles from "./SignIn.module.css";
import {
  Button,
  Checkbox,
  Fieldset,
  Group,
  Modal,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { PasswordStrength } from "./components/PasswordStrength";
import { useDisclosure } from "@mantine/hooks";

const content = Array(100)
  .fill(0)
  .map((_, index) => <p key={index}>Modal with scroll</p>);

const page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div className={styles.container}>
      <div>Sign In</div>
      <Modal opened={opened} onClose={close} title="Terms of service">
        {content}
      </Modal>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="your password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />

          <Group>
            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              key={form.key("termsOfService")}
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />
          </Group>
        </Stack>

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
};

export default page;

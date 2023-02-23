"use client";

import { useState } from "react";
import { Button } from "../button/button";
import { Input } from "../form/input";
import { PlusIcon } from "../icons/plus";
import { UserIcon } from "../icons/user";
import { Heading } from "../typography/heading";

export const NewsletterForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    // TODO: send actual email
    console.log(email);

    setLoading(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading level={4} className="mb-24">
        Join our newsletter
      </Heading>

      <div className="flex items-center space-x-16">
        <Input
          placeholder="Type your email address"
          name="email"
          type="email"
          required
          icon={<UserIcon />}
        />

        <Button
          type="submit"
          as="button"
          disabled={loading}
          className="hidden md:block"
        >
          Subscribe
        </Button>
        <Button
          type="submit"
          as="button"
          disabled={loading}
          className="md:hidden"
          variant="circle"
        >
          <PlusIcon />
        </Button>
      </div>
    </form>
  );
};

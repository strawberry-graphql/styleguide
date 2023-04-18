"use client";
import { useState } from "react";
import { Button } from "../button/button";
import { Textarea } from "../form/textarea";
import { Paragraph } from "../typography/paragraph";
import clsx from "clsx";

const FEEDBACK_OPTIONS = [
  {
    emoji: "😭",
    label: "Not at all",
    placeholder:
      "Write something specific about why this page wasn't helpful, we read all the feedback (they are posted on our discord server) ✨",
    buttonLabel: "Send feedback 😭",
  },
  {
    emoji: "😕",
    label: "It is a bit confusing",
    placeholder:
      "Write something specific about why this page was confusing, we read all the feedback (they are posted on our discord server) ✨",
    buttonLabel: "Send feedback 😕",
  },
  {
    emoji: "😃",
    label: "Yes",
    placeholder:
      "Write something specific about why this page was helpful, we read all the feedback (they are posted on our discord server) ✨",
    buttonLabel: "Send feedback 😃",
  },
  {
    emoji: "🤩",
    label: "Yes, very much",
    placeholder:
      "💖 Write something specific about why this page was helpful, we read all the feedback (they are posted on our discord server) ✨",
    buttonLabel: "💖 Send feedback 🤩",
  },
];

const FeedbackOption = ({
  emoji,
  label,
  onChange,
  selected,
}: {
  emoji: string;
  label: string;
  onChange: () => void;
  selected?: boolean;
}) => {
  return (
    <label
      className={clsx(
        "border border-g-100 relative rounded-[4px] w-[28px] h-[28px] flex justify-center items-center hover:bg-g-50",
        "dark:border-g-900 dark:hover:bg-g-700",
        {
          "bg-g-50 dark:bg-g-700": selected,
        }
      )}
    >
      <input
        type="radio"
        id={label}
        name="feedback"
        value={label}
        onChange={onChange}
        className="opacity-0 absolute inset-0 cursor-pointer"
      />
      {emoji}
    </label>
  );
};

export const FeedbackForm = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const currentOption = FEEDBACK_OPTIONS.find(
    (option) => option.label === selectedOption
  );

  const placeholder = currentOption?.placeholder;
  const buttonLabel = currentOption?.buttonLabel;

  return (
    <form>
      <div className="flex">
        <Paragraph variant="small" bold>
          Was this page helpful?
        </Paragraph>

        <div className="flex gap-4 ml-12">
          {FEEDBACK_OPTIONS.map((option) => (
            <FeedbackOption
              {...option}
              key={option.label}
              onChange={() => setSelectedOption(option.label)}
              selected={option.label === selectedOption}
            />
          ))}
        </div>
      </div>

      {placeholder && (
        <div className="mt-12">
          <Textarea
            placeholder={placeholder}
            className="min-h-[120px] mb-4"
          ></Textarea>

          <Button type="submit" as="button">
            {buttonLabel}
          </Button>
        </div>
      )}
    </form>
  );
};

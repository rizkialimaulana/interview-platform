import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { getRandomInterviewCover, getTechLogos } from "@/lib/utils";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard: React.FC<InterviewCardProps> = ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}) => {
  const feedback = null as Feedback | null;
  const normalizeType = /mix/gi.test(type) ? "Mixed" : type;
  const formatedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM DD, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 px-4 py-2 w-fit rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizeType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="image"
            width={90}
            height={90}
            className="rounded-full object-cover size-[90px]"
          />
          <h3 className="mt-5 capitalize">{role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formatedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken the interview yet. Take it now to improve your skill!"}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techstack} />
          <Button className="btn-primary">
            <Link
              href={feedback ? `interview/${id}/feedback"` : `/interview/${id}`}
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;

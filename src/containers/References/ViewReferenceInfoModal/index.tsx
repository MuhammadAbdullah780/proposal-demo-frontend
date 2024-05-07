import { AlertDialogHeader } from "@/components/ui/AlertDialog";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import React from "react";

type Props = {
  text: string;
};

const ViewReferenceInfoModal = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="text">View</Button>
      </DialogTrigger>
      <DialogContent className="w-[700px]">
        <DialogHeader>
          <DialogTitle>Reference Info Text</DialogTitle>
          <DialogDescription>
            This is Reference Info for the person you selected
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[400px] bg-secondary p-5 overflow-x-hidden overflow-y-auto rounded-md">
          {`
            I am Muhammad Abdullah, a Software Engineer with a passion for
          innovation and a knack for bridging the gap between cutting-edge tech
          and real-world applications. My two-year tenure as a FullStack and
          Generative AI developer at Expedey has equipped me with a robust
          foundation in both frontend and backend development. Frontend
          Flexibility: I thrive on versatility. From crafting dynamic
          experiences with React, Vue, or Angular to building lightning-fast
          static sites with Gatsby, I can adapt to any frontend challenge. For
          user-friendly content management, I seamlessly integrate popular CMS
          platforms like Wordpress, Wix, or Webflow. Backend Expertise: The
          backend is my playground. Node.js, FastAPI, and GRPC are just a few
          tools in my arsenal for building robust and scalable server-side
          applications. Data is my ally, whether leveraging the flexibility of
          NoSQL options like MongoDB and DynamoDB or the power of SQL stalwarts
          like PostgreSQL and Oracle. Mobile Mastery: Mobile development is
          another feather in my cap. Cross-platform solutions with Flutter or
          React Native? Native experiences with Java, Kotlin, or Swift? I can
          deliver on any mobile vision. Beyond Traditional Development: My
          interests extend beyond conventional software development. The world
          of Blockchain fascinates me, and my knowledge of Solidity and smart
          contract interaction libraries allows me to create secure and
          innovative decentralized applications. Efficiency Advocate:
          Streamlining workflows is my middle name. DevOps tools like Docker,
          Kubernetes, and Terraform are my companions, ensuring a smooth journey
          from concept to deployment. CI/CD tools and API/Load Testing tools are
          also part of my repertoire, guaranteeing seamless deployments and
          robust applications. Continuous Learner: I'm a lifelong learner,
          captivated by the potential of Generative AI. I actively explore the
          MERN Stack for full-stack mastery, while simultaneously delving into
          frameworks like Next.js and Nest.js to push the boundaries of web
          development. Stay Connected: I'm based in Karachi, Pakistan, and love
          connecting with fellow tech enthusiasts. Reach out on Github, my
          portfolio website, or LinkedIn to explore my work and discuss the
          future of technology!
            `}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewReferenceInfoModal;

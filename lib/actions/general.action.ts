import { db } from "@/firebase/admin";
import { getCurrentUser } from "./auth.action";

// Check if user is authenticated
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

export async function getInterviewByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interview = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("userId", "==", userId)
    .get();

  return interview.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Interview[];
}

export async function getLatestInterview(
  params: GetLatestInterviewsParams
): Promise<Interview[]> {
  const { userId, limit = 20 } = params;
  const interview = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return interview.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
}

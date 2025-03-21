import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Header } from "./header";

const LearnPage = () => {
    return ( 
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={{ title: "Arabic", imageSrc: "/sa.svg" }}
                    hearths={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Arabic"/>
            </FeedWrapper>
        </div>
     );
}
 
export default LearnPage;
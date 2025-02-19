

import { MainMenusGradientCard } from "@/components/eldoraui/animatedcard";

export function AnimatedCardDemo() {
  return (
    <div className="relative grid w-5/6 grid-cols-1 gap-2 p-2 md:grid-cols-2">
      <MainMenusGradientCard
        className="p-4"
        description="Participants"
        title="1000+"
      >
        
      </MainMenusGradientCard>
      <MainMenusGradientCard
        className="p-4"
        description="Speakers"
        title="35+"
      >

      </MainMenusGradientCard>
      <MainMenusGradientCard
        description="Sessions"
        title="25+"
      />
      <MainMenusGradientCard
        description="Day(s)"
        title="2"
      />
    </div>
  );
}

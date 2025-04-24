import { InstallationView } from "../components/installation-view";
import { IntroView } from "../components/introduction-view";

export default function Page({ params }: { params: { slug: string } }) {
  const getDocView = () => {
    switch (params.slug) {
      case "intro":
        return <IntroView />;
      case "installation":
        return <InstallationView />;
      default:
        return <IntroView />;
    }
  };
  return <>{getDocView()}</>;
}

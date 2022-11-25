import { useRouter } from "next/router";
import triggerLazyLoad from "../../../helpers/triggerLazyLoad";

export const FooterContent = ({ sections, setLoading }) => {
  const router = useRouter();
  if (sections == "") {
    return "";
  } else
    return (
      <>
        {sections?.map((category) => (
          <div key={category}>
            <a onClick={() => triggerLazyLoad(setLoading, category, router)}>
              <h3>{category}</h3>
            </a>
          </div>
        ))}
      </>
    );
};

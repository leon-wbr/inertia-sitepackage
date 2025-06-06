import Header from "./CTypes/Header";
import { Link } from "@inertiajs/react";
import parse, { domToReact } from "html-react-parser";
import Accordion from "./CTypes/Accordion";

export interface ContentElement {
  CType: string;
  html?: string;
  [key: string]: any;
}

const contentElementComponents: Record<
  string,
  React.ComponentType<{ data: ContentElement }>
> = {
  header: Header,
  accordion: Accordion,
};

export default function ContentElements({
  contentElements,
}: {
  contentElements?: any[];
}) {
  return (
    <div className="content-elements">
      {contentElements?.map((element, index) => {
        const Component = contentElementComponents[element.CType];

        if (Component) {
          return <Component key={index} data={element.data} />;
        }

        return (
          parse(element.html || "", {
            replace(domNode: any) {
              if (domNode.name !== "a") {
                return;
              }

              const href = domNode.attribs?.href;
              if (!href || !href.startsWith("/")) {
                return;
              }

              return (
                <Link href={href}>
                  {domToReact(domNode.children, domNode.options)}
                </Link>
              );
            },
          }) || null
        );
      })}
    </div>
  );
}

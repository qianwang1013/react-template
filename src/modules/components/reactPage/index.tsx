import Editor, { CellPlugin, Value } from "@react-page/editor";
import Button from "../button";
import "@react-page/editor/lib/index.css";
import background from "@react-page/plugins-background";
import image from "@react-page/plugins-image";
import "@react-page/plugins-image/lib/index.css";
import slate from "@react-page/plugins-slate";
import "@react-page/plugins-slate/lib/index.css";
import React, { useState } from "react";
import "./styles.scss";
import { Article } from "../../types/topic";

const cellPlugins = [slate(), image, background] as CellPlugin[];

export interface ReactPageProps {
  saveArticle?: (v: Value) => void;
  updateArticle?: (id: string, v: Value) => void;
  article?: Article;
  readOnly?: boolean;
}

export default function ReactPage({
  saveArticle,
  updateArticle,
  article,
  readOnly,
}: ReactPageProps) {
  const [value, setValue] = useState<Value | undefined>(
    article?.data ? JSON.parse(article.data) : undefined
  );

  const shouldShowActions = !!value && updateArticle && saveArticle;
  const shouldShowUpdate = shouldShowActions && !!article?.id;

  React.useEffect(() => {
    if (!!article) {
      setValue(JSON.parse(article.data));
    }
  }, [article]);

  return (
    <>
      {shouldShowActions &&
        (shouldShowUpdate ? (
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          <Button onClick={() => updateArticle!(article?.id!, value!)}>
            Update
          </Button>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          <Button onClick={() => saveArticle!(value!)}>Save</Button>
        ))}
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
        readOnly={readOnly}
      />
    </>
  );
}

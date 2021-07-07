import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Edit",
    description: (
      <>The LCSR Docs are written in Markdown and built using Docusaurus.</>
    ),
  },
  {
    title: "Open Source",
    description: (
      <>
        LCSR Docs is hosted on GitHub, just like every other decent docsite. To
        edit these pages, make a pull request!
      </>
    ),
  },
  {
    title: "Readable",
    description: (
      <>
        Not sure what you're missing out on, because there are too many
        resources flying at you? Start here.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

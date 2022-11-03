import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Downshift from "downshift";
import styles from "../styles/spotlight.module.css";
import "@reach/dialog/styles.css";
import { matchSorter } from "match-sorter";
import tinykeys from "tinykeys";
import posts from "../data/blog/blog.json";

let socials = [
  {
    title: "Twitter",
    extUrl: "https://twitter.com/sph_ere",
  },
  {
    title: "Github",
    extUrl: "https://github.com/naxer-12/",
  },
];

let projects = [
  {
    title: "Pension app",
    extUrl: "https://play.google.com/store/apps/details?id=ae.gov.pensionfund",
  },
  {
    title: "News App",
    extUrl:
      "https://play.google.com/store/apps/details?id=ae.sharjah24.mobile&hl=en_SG",
  },
  {
    title: "City Exploring App",
    extUrl: "https://play.google.com/store/apps/details?id=com.masdar.app",
  },
  {
    title: "Trading app",
    extUrl: "https://bit.ly/3aqq41B",
  },
];
let personal_projects = [
  {
    title: "Daily News App(Github)",
    extUrl: "https://github.com/naxer-12/daily-news",
  },
  {
    title: "Food Grid App(Github)",
    extUrl: "https://github.com/naxer-12/FoodGrid",
  },
  {
    title: "Parking App(Github)",
    extUrl: "https://github.com/naxer-12/Parking-app",
  },
  {
    title: "NHL hockey App(Github)",
    extUrl: "https://github.com/naxer-12/nhl-hockey-app",
  },
];
let nav = [
  {
    title: "Work",
    url: "/",
  },
  // {
  //   title: "Prototypes",
  //   url: "/prototypes",
  // },
  // {
  //   title: "Writing",
  //   url: "/writing",
  // },
];
let resume = [
  {
    title: "Resume",
    extUrl:
      "https://drive.google.com/file/d/1M7cE2roszn2_xIu5xSCGWcMjxKLCEgTq/view?usp=sharing",
  },
];

const data = [
  // { name: "Writing", source: posts },
  // { name: "Navigation", source: nav },
  // {
  //   name: "Social",
  //   source: socials,
  // },
  {
    name: "Projects",
    source: projects,
  },
  {
    name: "Personal Projects",
    source: personal_projects,
  },
  // {
  //   name: "Resume",
  //   source: resume,
  // },
];

function Spotlight(props) {
  const router = useRouter();
  const [showInstructions, setShowInstructions] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => {
    setShowInstructions(false);
    setShowDialog(false);
  };

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "$mod+K": (e) => {
        showDialog && e.target.blur();
        showDialog ? close() : open();
      },
      Escape: () => {
        close();
      },
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <div>
      <div
        onClick={() => {
          open();
          setShowInstructions(true);
        }}
        className={props.className}
      >
        {props.children}
      </div>
      <DialogOverlay
        className={styles.overlay}
        onDismiss={close}
        isOpen={showDialog}
      >
        <DialogContent aria-label="Spotlight" className={styles.content}>
          <Downshift
            initialHighlightedIndex={0}
            defaultHighlightedIndex={0}
            isOpen={true}
            onChange={(selection) => {
              selection.extUrl
                ? window.open(selection.extUrl, "_blank")
                : router.push(selection.url);
              close();
            }}
            itemToString={(item) => (item ? item.title : "")}
          >
            {({
              getInputProps,
              getItemProps,
              getMenuProps,
              inputValue,
              highlightedIndex,
              getRootProps,
            }) => (
              <div {...getRootProps({}, { suppressRefError: true })}>
                <div className={styles["search-input-container"]}>
                  <input
                    spellCheck="false"
                    value={inputValue}
                    placeholder="Search"
                    style={{
                      width: showInstructions ? "calc(100% - 90px)" : "100%",
                    }}
                    className={styles["search-input"]}
                    {...getInputProps({
                      onKeyDown: (e) => {
                        if (e.code === "Escape") {
                          e.target.blur();
                        }
                      },
                    })}
                  />
                  {showInstructions && (
                    <div className={styles["cmd-hint"]}>⌘ ＋ K</div>
                  )}
                </div>
                <div {...getMenuProps()} className={styles["list-container"]}>
                  {
                    matchSorter(data, inputValue, {
                      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
                      keys: [(section) => section.source.map((i) => i.title)],
                    }).reduce(
                      (result, section, sectionIndex) => {
                        result.sections.push(
                          <div key={sectionIndex}>
                            {section.name && (
                              <div className={styles["list-heading"]}>
                                {section.name}
                              </div>
                            )}

                            {matchSorter(section.source, inputValue, {
                              keys: ["title"],
                              baseSort: (a, b) => (a.index < b.index ? -1 : 1),
                            }).map((item, itemIndex) => {
                              const index = result.itemIndex++;
                              return (
                                <div
                                  className={`${styles["list-item"]} ${
                                    highlightedIndex === index
                                      ? styles["list-item-active"]
                                      : ""
                                  }`}
                                  key={itemIndex}
                                  {...getItemProps({
                                    key: item + index,
                                    item: item,
                                    index: index,
                                  })}
                                >
                                  {item.title}
                                </div>
                              );
                            })}
                          </div>
                        );
                        return result;
                      },
                      { sections: [], itemIndex: 0 }
                    ).sections
                  }
                </div>
              </div>
            )}
          </Downshift>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
}

export default Spotlight;

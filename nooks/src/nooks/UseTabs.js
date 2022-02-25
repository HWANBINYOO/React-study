import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: " I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: " I'm the content of Section 2",
  },
];

const useTabs = (initalTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    //배열이 아닐떄 리턴
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initalTab);
  return {
    currenItem: allTabs[currentIndex],
    changItem: setCurrentIndex,
  };
};

const UseTabsApp = () => {
  const { currenItem, changItem } = useTabs(1, content);
  return (
    <div>
      {content.map((Section, index) => (
        <button onClick={() => changItem(index)}>{Section.tab}</button>
      ))}
      <div>{currenItem.content}</div>
    </div>
  );
};

export default UseTabsApp;

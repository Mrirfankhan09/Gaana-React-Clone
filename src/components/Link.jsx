import React from "react";

export default function Link({ array }) {
  return (
    <>
      {array.map((element) => {
        return (
          <div class="link">
            <div class="_a">
              <span>{element.linkname}</span>
            </div>
            <div class="_b">
             {element.linkarr.map((ele)=>{
                return (
                    <a href="">{ele}</a>

                );
             })}
            </div>
          </div>
        );
      })}
    </>
  );
}

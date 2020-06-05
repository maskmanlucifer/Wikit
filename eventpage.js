/* create context menu. */
let menuItem=
{
    "id":"wikit",
    "title":"Wikit",
    "contexts":["selection"],

};
chrome.contextMenus.create(menuItem);

/*A better URl getter.*/
function fixedencodeduri(str)
{
return encodeURI(str).replace(/%SB/g,'[').replace(/%SD/g,']');
}

/*Final redirecting steps after click.*/
chrome.contextMenus.onClicked.addListener(function(clickdata)
{
    if(clickdata.menuItemId== "wikit" && clickdata.selectionText)
    {
        let wikiURL="https://en.wikipedia.org/wiki/" + fixedencodeduri(clickdata.selectionText);
        let createData=
        {
            "url":wikiURL,
            "type":"popup",
             "top":5,
             "left":5,
             "width":screen.availWidth/2,
             "height":screen.availHeight/2
        };
        chrome.windows.create(createData,function(){});
    }
});
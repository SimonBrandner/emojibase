(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return j})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(6),b=(a(0),a(78)),c={title:"Shortcodes"},i={unversionedId:"shortcodes",id:"shortcodes",isDocsHomePage:!1,title:"Shortcodes",description:"Shortcodes are short and succinct words, surrounded by colons, representing emoji (). They're",source:"@site/docs/shortcodes.md",permalink:"/docs/shortcodes",editUrl:"https://github.com/milesj/emojibase/edit/master/website/docs/shortcodes.md",sidebar:"docs",previous:{title:"Regex patterns",permalink:"/docs/regex"},next:{title:"Emoticons",permalink:"/docs/emoticons"}},j=[{value:"Presets",id:"presets",children:[{value:"<code>cldr</code>",id:"cldr",children:[]},{value:"<code>cldr-native</code>",id:"cldr-native",children:[]},{value:"<code>discord</code>",id:"discord",children:[]},{value:"<code>emojibase</code>",id:"emojibase",children:[]},{value:"<code>emojibase-legacy</code>",id:"emojibase-legacy",children:[]},{value:"<code>github</code>",id:"github",children:[]},{value:"<code>iamcal</code>",id:"iamcal",children:[]},{value:"<code>joypixels</code>",id:"joypixels",children:[]},{value:"<code>slack</code>",id:"slack",children:[]}]},{value:"Localization",id:"localization",children:[]},{value:"Caveats",id:"caveats",children:[]}],l={rightToc:j};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Shortcodes are short and succinct words, surrounded by colons, representing emoji (",Object(b.b)("inlineCode",{parentName:"p"},":cat:"),"). They're\nprimarily used within forums, comments, message posts, and basically anywhere with user-to-user\ncommunication. They exist for situations where an emoji keyboard is not present, but emoji\ncharacters should be supported."),Object(b.b)("p",null,"That being said, shortcodes are not officially supported by Unicode or any standard, and are\nentirely community driven. Because of this, shortcodes (also known as shortnames), may differ\nbetween implementations, websites, or libraries."),Object(b.b)("p",null,"Emojibase aims to solve this problem by providing shortcode presets. Each preset is a distinct\ncollection of shortcodes that map to emoji hexcodes. They're entirely platform dependent."),Object(b.b)("h2",{id:"presets"},"Presets"),Object(b.b)("h3",{id:"cldr"},Object(b.b)("inlineCode",{parentName:"h3"},"cldr")),Object(b.b)("p",null,"Localized shortcodes derived from the official Unicode ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://cldr.unicode.org/index/downloads/cldr-37"}),"CLDR")," annotations. Non-Latin languages\nare transliterated to a Latin character equivalent, but may not be entirely accurate. These are\nbasically slugified variations of the ",Object(b.b)("inlineCode",{parentName:"p"},"annotation")," field in the Emojibase emoji object."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"// \ud83d\ude01 beaming face with smiling eyes\n:beaming_face_with_smiling_eyes: // English\n:ni_yatto_warau: // Japanese\n:svetitsya_ot_schastya: // Russian\n")),Object(b.b)("h3",{id:"cldr-native"},Object(b.b)("inlineCode",{parentName:"h3"},"cldr-native")),Object(b.b)("p",null,"Like ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#cldr"}),Object(b.b)("inlineCode",{parentName:"a"},"cldr"))," but shortcodes are not transliterated to Latin characters. These presets ",Object(b.b)("em",{parentName:"p"},"do\nnot")," exist for Latin based languages."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"// \ud83d\ude01 beaming face with smiling eyes\n:\ubbf8\uc18c_\uc9d3\ub294_\ub208\uc73c\ub85c_\uc6c3\ub294_\uc5bc\uad74: // Korean\n:\u043e\u0441\u044f\u0439\u043d\u043e_\u0432\u0441\u043c\u0456\u0445\u043d\u0435\u043d\u0435_\u043e\u0431\u043b\u0438\u0447\u0447\u044f_\u0439_\u043e\u0447\u0456: // Ukrainian\n")),Object(b.b)("h3",{id:"discord"},Object(b.b)("inlineCode",{parentName:"h3"},"discord")),Object(b.b)("p",null,"An alias for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#joypixels"}),Object(b.b)("inlineCode",{parentName:"a"},"joypixels"))," preset."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This preset may not be accurate as Discord does not provide an official implementation for its\nshortcodes. If you would like to improve this solution, please create an issue!")),Object(b.b)("h3",{id:"emojibase"},Object(b.b)("inlineCode",{parentName:"h3"},"emojibase")),Object(b.b)("p",null,'Emojibase shortcodes that are carefully crafted and maintained in an effort to push forward an\n"official" shortcode standard. It does this by accomplishing the following:'),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"All emoji (including skin tones) will have a shortcode based on their annotation or Unicode name."),Object(b.b)("li",{parentName:"ul"},"Many emoji will provide shorthand and alternative shortcodes (primarily in regards to smileys and\npeople)."),Object(b.b)("li",{parentName:"ul"},"Commonly used shortcodes from other presets will be supported for interoperability and backwards\ncompatibility. This does not guarantee 100% compatibility across the board.")),Object(b.b)("p",null,"With this standard in place, we would also like to provide localized versions in the future."),Object(b.b)("h3",{id:"emojibase-legacy"},Object(b.b)("inlineCode",{parentName:"h3"},"emojibase-legacy")),Object(b.b)("p",null,"Deprecated Emojibase shortcodes that preferred emotions/feelings for smiley faces, instead of\nliteral terms. This caused discrepencies between other platforms, and often did not align visually."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This preset is no longer maintained but exists for backwards compatibility. It was deprecated\nbased on community feedback.")),Object(b.b)("h3",{id:"github"},Object(b.b)("inlineCode",{parentName:"h3"},"github")),Object(b.b)("p",null,"Official emoji shortcodes for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com"}),"GitHub")," platform, powered by the\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.github.com/emojis"}),"official v3 API"),"."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This preset ",Object(b.b)("em",{parentName:"p"},"does not")," define shortcodes for skin tone variations.")),Object(b.b)("h3",{id:"iamcal"},Object(b.b)("inlineCode",{parentName:"h3"},"iamcal")),Object(b.b)("p",null,"Emoji shortcodes provided by the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/iamcal/emoji-data"}),"emoji-data")," library, owned\nand maintained by ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/iamcal"}),"Cal Henderson"),"."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This preset ",Object(b.b)("em",{parentName:"p"},"does not")," define shortcodes for skin tone variations, nor does it support the latest\nv13 specification.")),Object(b.b)("h3",{id:"joypixels"},Object(b.b)("inlineCode",{parentName:"h3"},"joypixels")),Object(b.b)("p",null,"Emoji shortcodes provided by the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joypixels/emoji-toolkit"}),"emoji-toolkit"),"\nlibrary, owned and maintained by ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joypixels"}),"JoyPixels")," (formerly EmojiOne)."),Object(b.b)("h3",{id:"slack"},Object(b.b)("inlineCode",{parentName:"h3"},"slack")),Object(b.b)("p",null,"An alias for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#iamcal"}),Object(b.b)("inlineCode",{parentName:"a"},"iamcal"))," preset."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This preset may not be accurate as Slack does not provide an official implementation for its\nshortcodes. If you would like to improve this solution, please create an issue!")),Object(b.b)("h2",{id:"localization"},"Localization"),Object(b.b)("p",null,"If you would like to help translate in any way possible, please create an issue on GitHub."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Locale"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"cldr")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"cldr-native")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"emojibase")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"emojibase-legacy")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"github")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"iamcal")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"th"},"joypixels")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Chinese (zh)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Chinese, Trad. (zh-hant)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Danish (da)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dutch (nl)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"English (en)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"English, GB (en-gb)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Estonian (et)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Finnish (fi)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"French (fr)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"German (de)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hungarian (hu)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Italian (it)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Japanese (ja)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Korean (ko)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Lithuanian (lt)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Malay (ms)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Norwegian (nb)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Polish (pl)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Portuguese (pt)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Russian (ru)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spanish (es)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spanish, Mexico (es-mx)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Swedish (sv)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Thai (th)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ukrainian (uk)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",{id:"caveats"},"Caveats"),Object(b.b)("p",null,"Some caveats to be aware of when using shortcodes."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Shortcodes are non-standard and the names/terminology will differ between presets."),Object(b.b)("li",{parentName:"ul"},"Some emojis may be missing shortcodes depending on the preset."),Object(b.b)("li",{parentName:"ul"},"There may be duplicate and/or conflicting shortcodes when using multiple presets."),Object(b.b)("li",{parentName:"ul"},"Presets may not provide shortcodes for the latest emoji/Unicode specifications.")))}O.isMDXComponent=!0}}]);
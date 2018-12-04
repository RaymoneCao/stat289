(function() {
  var fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
          
        var docs_json = '{"248d6990-45b8-4701-a9fd-eca3c17e910b":{"roots":{"references":[{"attributes":{},"id":"a28ed39d-c8ac-4d1b-91d6-c906eae845f9","type":"LinearScale"},{"attributes":{"callback":null,"data":{"COLOR":["#9FD938","#440154","#E7E419","#CFE11C","#8BD546","#B7DD29","#472575","#3C4E8A","#1E9B89","#33618D","#404487","#2F698D","#2C728E","#1F938B","#228B8D","#FDE724","#37588C","#460C5F","#48196B","#60C960","#287A8E","#433A83","#46307D","#4DC26B","#26AC81","#25838D","#3DBB74","#74D054","#20A485","#30B47A"],"Length":[63396,17579,71842,70386,58533,63759,22350,35407,49872,38120,33165,38534,40112,49278,48316,80261,36835,18128,19670,57375,41655,33096,28442,53330,50862,46908,51489,58070,50772,51078],"dlink":["docs.html#sec-1","docs.html#sec0","docs.html#sec1","docs.html#sec2","docs.html#sec3","docs.html#sec4","docs.html#sec5","docs.html#sec6","docs.html#sec7","docs.html#sec8","docs.html#sec9","docs.html#sec10","docs.html#sec11","docs.html#sec12","docs.html#sec13","docs.html#sec14","docs.html#sec15","docs.html#sec16","docs.html#sec17","docs.html#sec18","docs.html#sec19","docs.html#sec20","docs.html#sec21","docs.html#sec22","docs.html#sec23","docs.html#sec24","docs.html#sec25","docs.html#sec26","docs.html#sec27","docs.html#sec28"],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"num_ilinks":[944,751,1005,1295,840,762,641,683,624,616,687,679,570,641,612,791,902,452,357,904,637,489,508,650,659,952,837,1003,671,816],"num_langs":[67,61,64,61,67,68,65,58,59,58,62,63,61,61,59,63,62,60,59,67,61,57,55,61,58,66,61,69,62,60],"title":["Boston Celtics","Brooklyn Nets","New York Knicks","Philadelphia 76ers","Toronto Raptors","Chicago Bulls","Cleveland Cavaliers","Detroit Pistons","Indiana Pacers","Milwaukee Bucks","Atlanta Hawks","Charlotte Hornets","Miami Heat","Orlando Magic","Washington Wizards","Dallas Mavericks","Houston Rockets","Memphis Grizzlies","New Orleans Pelicans","San Antonio Spurs","Denver Nuggets","Minnesota Timberwolves","Oklahoma City Thunder","Portland Trail Blazers","Utah Jazz","Golden State Warriors","Los Angeles Clippers","Los Angeles Lakers","Phoenix Suns","Sacramento Kings"]},"selected":{"id":"d092ff73-6bf0-420a-a0bd-5c4aaa3b7483","type":"Selection"},"selection_policy":{"id":"f5f57559-2574-4fee-b540-631a3dde7255","type":"UnionRenderers"}},"id":"cb9345f4-770f-4480-a811-b2dffe322af1","type":"ColumnDataSource"},{"attributes":{},"id":"d092ff73-6bf0-420a-a0bd-5c4aaa3b7483","type":"Selection"},{"attributes":{"callback":null},"id":"8df4991d-7729-4315-bfd9-94c42735b9eb","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"COLOR"},"line_color":{"field":"COLOR"},"size":{"units":"screen","value":10},"x":{"field":"num_ilinks"},"y":{"field":"num_langs"}},"id":"ad1eddaa-d267-4557-abb8-1028a84ca405","type":"Circle"},{"attributes":{},"id":"f5f57559-2574-4fee-b540-631a3dde7255","type":"UnionRenderers"},{"attributes":{"plot":null,"text":""},"id":"28aba06c-8b73-4343-84b0-18f13588c87f","type":"Title"},{"attributes":{"plot":{"id":"64f7300c-598e-415a-8406-d170f4004c68","subtype":"Figure","type":"Plot"},"ticker":{"id":"577cd462-2bc6-4cbb-bf87-810c6a93eec2","type":"BasicTicker"}},"id":"f896ac6f-0e3c-4480-9e6c-9661295cc912","type":"Grid"},{"attributes":{},"id":"577cd462-2bc6-4cbb-bf87-810c6a93eec2","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":{"id":"b5b6b26c-ef17-47d5-8449-acf4335dca36","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"1c370b5b-b46f-465d-b0d8-e28deb6b5770","type":"HoverTool"},{"id":"5704296c-5fbb-44e1-80ec-d8610d41f04e","type":"PanTool"},{"id":"b5b6b26c-ef17-47d5-8449-acf4335dca36","type":"WheelZoomTool"},{"id":"71d5f083-5451-49cc-a947-cf4fe07d7db9","type":"ResetTool"},{"id":"37757653-e420-4b12-87fa-e15f6ebaaa5c","type":"TapTool"}]},"id":"04a4807a-ec30-4074-9574-10eed4a70773","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"num_ilinks"},"y":{"field":"num_langs"}},"id":"f6a5f676-e28d-4a94-a00e-29ddbd95b57b","type":"Circle"},{"attributes":{"axis_label":"Number of language pages","formatter":{"id":"4772568b-fa98-4f25-b0ee-b280aea2e7bb","type":"BasicTickFormatter"},"plot":{"id":"64f7300c-598e-415a-8406-d170f4004c68","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf211ee7-dd3c-450c-8971-5c868bbdde6d","type":"BasicTicker"}},"id":"eb654719-2be4-479d-be45-0ddc171e8a62","type":"LinearAxis"},{"attributes":{"axis_label":"Number of internal links","formatter":{"id":"5bea3ed2-a7c1-4eb9-9896-200e5fabe366","type":"BasicTickFormatter"},"plot":{"id":"64f7300c-598e-415a-8406-d170f4004c68","subtype":"Figure","type":"Plot"},"ticker":{"id":"577cd462-2bc6-4cbb-bf87-810c6a93eec2","type":"BasicTicker"}},"id":"1b22093a-a8bb-4c43-ac07-545006f97c1b","type":"LinearAxis"},{"attributes":{},"id":"bf211ee7-dd3c-450c-8971-5c868bbdde6d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"64f7300c-598e-415a-8406-d170f4004c68","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf211ee7-dd3c-450c-8971-5c868bbdde6d","type":"BasicTicker"}},"id":"a40c474f-d5e9-4e2a-9a17-89a124ed7f09","type":"Grid"},{"attributes":{"data_source":{"id":"cb9345f4-770f-4480-a811-b2dffe322af1","type":"ColumnDataSource"},"glyph":{"id":"ad1eddaa-d267-4557-abb8-1028a84ca405","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6a5f676-e28d-4a94-a00e-29ddbd95b57b","type":"Circle"},"selection_glyph":null,"view":{"id":"9193379d-9fd2-47a2-9069-a938b80faf60","type":"CDSView"}},"id":"2e5e4bda-6036-43fb-a394-514082988e84","type":"GlyphRenderer"},{"attributes":{},"id":"5bea3ed2-a7c1-4eb9-9896-200e5fabe366","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["title","@title"],["Length","@Length"]]},"id":"1c370b5b-b46f-465d-b0d8-e28deb6b5770","type":"HoverTool"},{"attributes":{},"id":"4772568b-fa98-4f25-b0ee-b280aea2e7bb","type":"BasicTickFormatter"},{"attributes":{},"id":"4e7d2eba-5751-474f-b1a1-dc8f64d08b9c","type":"LinearScale"},{"attributes":{"url":"@dlink"},"id":"6ca92a26-b842-4c71-8451-ee247149d300","type":"OpenURL"},{"attributes":{},"id":"5704296c-5fbb-44e1-80ec-d8610d41f04e","type":"PanTool"},{"attributes":{"source":{"id":"cb9345f4-770f-4480-a811-b2dffe322af1","type":"ColumnDataSource"}},"id":"9193379d-9fd2-47a2-9069-a938b80faf60","type":"CDSView"},{"attributes":{},"id":"b5b6b26c-ef17-47d5-8449-acf4335dca36","type":"WheelZoomTool"},{"attributes":{},"id":"71d5f083-5451-49cc-a947-cf4fe07d7db9","type":"ResetTool"},{"attributes":{"below":[{"id":"1b22093a-a8bb-4c43-ac07-545006f97c1b","type":"LinearAxis"}],"left":[{"id":"eb654719-2be4-479d-be45-0ddc171e8a62","type":"LinearAxis"}],"plot_width":950,"renderers":[{"id":"1b22093a-a8bb-4c43-ac07-545006f97c1b","type":"LinearAxis"},{"id":"f896ac6f-0e3c-4480-9e6c-9661295cc912","type":"Grid"},{"id":"eb654719-2be4-479d-be45-0ddc171e8a62","type":"LinearAxis"},{"id":"a40c474f-d5e9-4e2a-9a17-89a124ed7f09","type":"Grid"},{"id":"2e5e4bda-6036-43fb-a394-514082988e84","type":"GlyphRenderer"}],"title":{"id":"28aba06c-8b73-4343-84b0-18f13588c87f","type":"Title"},"toolbar":{"id":"04a4807a-ec30-4074-9574-10eed4a70773","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"8df4991d-7729-4315-bfd9-94c42735b9eb","type":"DataRange1d"},"x_scale":{"id":"4e7d2eba-5751-474f-b1a1-dc8f64d08b9c","type":"LinearScale"},"y_range":{"id":"423bf01d-c89c-453b-9ec5-15704d006a25","type":"DataRange1d"},"y_scale":{"id":"a28ed39d-c8ac-4d1b-91d6-c906eae845f9","type":"LinearScale"}},"id":"64f7300c-598e-415a-8406-d170f4004c68","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"423bf01d-c89c-453b-9ec5-15704d006a25","type":"DataRange1d"},{"attributes":{"callback":{"id":"6ca92a26-b842-4c71-8451-ee247149d300","type":"OpenURL"}},"id":"37757653-e420-4b12-87fa-e15f6ebaaa5c","type":"TapTool"}],"root_ids":["64f7300c-598e-415a-8406-d170f4004c68"]},"title":"Bokeh Application","version":"0.13.0"}}';
        var render_items = [{"docid":"248d6990-45b8-4701-a9fd-eca3c17e910b","roots":{"64f7300c-598e-415a-8406-d170f4004c68":"597c6794-c4df-42cb-bf17-9c348e39cf26"}}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
      
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          var attempts = 0;
          var timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              embed_document(root);
              clearInterval(timer);
            }
            attempts++;
            if (attempts > 100) {
              console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
              clearInterval(timer);
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
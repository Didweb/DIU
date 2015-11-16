jQuery("#simulation")
  .on("click", ".s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/86f28c0c-8448-405a-bae4-25992f666bbe"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d1a72e9-e49e-4468-bed8-86a127509c84"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7cb8619-bdea-4a98-aba2-232d947513f2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4fcd6761-14c7-431f-a88c-06d9746d49c8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_2": {
                      "attributes": {
                        "background-color": "#273847",
                        "background-image": "none",
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#273847",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#273847",
                        "background-image": "none",
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#273847",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_4": {
                      "attributes": {
                        "background-color": "#273847",
                        "background-image": "none",
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#273847",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_3": {
                      "attributes": {
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_3 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_11": {
                      "attributes": {
                        "background-color": "#273847",
                        "background-image": "none",
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Rectangle_11": {
                      "attributes-ie": {
                        "-pie-background": "#273847",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Facebook") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Facebook": {
                      "attributes": {
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Facebook .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Facebook span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_4": {
                      "attributes": {
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_4 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_5": {
                      "attributes": {
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_5 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_6": {
                      "attributes": {
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 #s-Label_6 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b11c2b54-1e9c-4b30-a949-c1732ceaa738 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Facebook")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    }
  });
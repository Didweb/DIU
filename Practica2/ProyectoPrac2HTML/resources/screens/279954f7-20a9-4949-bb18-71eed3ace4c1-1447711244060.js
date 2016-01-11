jQuery("#simulation")
  .on("click", ".s-279954f7-20a9-4949-bb18-71eed3ace4c1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-sing-in")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7a60c827-c664-48e3-b0de-bb473f788709"
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
    } else if(jFirer.is("#s-sing-up")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0adc0d0d-d474-4a05-a461-d49d05d59657"
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
    } else if(jFirer.is("#s-inicio")) {
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
    } else if(jFirer.is("#s-sobreNosotros")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/49e58b48-4959-48e8-9074-648656eabaff"
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
    } else if(jFirer.is("#s-contacto")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/78749641-921c-4903-af73-de70f349b7ec"
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
    } else if(jFirer.is("#s-tarifas")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e65baf21-7ac3-4b73-954d-881550020dcc"
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
  .on("mouseenter dragenter", ".s-279954f7-20a9-4949-bb18-71eed3ace4c1 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-sing-in") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-in": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "14.0pt",
                        "font-family": "Geeza Pro,Arial"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-in .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-in span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Geeza Pro,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-in": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-sing-up") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-up": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "14.0pt",
                        "font-family": "Geeza Pro,Arial"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-up .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-up span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Geeza Pro,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sing-up": {
                      "attributes-ie": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-inicio") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-inicio": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Geeza Pro,Arial"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-inicio .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-inicio span": {
                      "attributes": {
                        "color": "#FECB6E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Geeza Pro,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#s-sobreNosotros") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sobreNosotros": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Geeza Pro,Arial"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sobreNosotros .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-sobreNosotros span": {
                      "attributes": {
                        "color": "#FECB6E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Geeza Pro,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#s-contacto") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-contacto": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Geeza Pro,Arial"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-contacto .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-contacto span": {
                      "attributes": {
                        "color": "#FECB6E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Geeza Pro,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
    } else if(jFirer.is("#s-tarifas") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-tarifas": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Geeza Pro,Arial"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-tarifas .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-279954f7-20a9-4949-bb18-71eed3ace4c1 #s-tarifas span": {
                      "attributes": {
                        "color": "#FECB6E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Geeza Pro,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
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
  .on("mouseleave dragleave", ".s-279954f7-20a9-4949-bb18-71eed3ace4c1 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-sing-in")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-sing-up")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-inicio")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-sobreNosotros")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-contacto")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-tarifas")) {
      jEvent.undoCases(jFirer);
    }
  });
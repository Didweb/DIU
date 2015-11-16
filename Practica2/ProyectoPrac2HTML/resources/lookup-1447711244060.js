(function(window, undefined) {
  var dictionary = {
    "6d19fdda-ef87-480e-baf6-208fff7158fe": "Evento_Creado",
    "040361d8-c5b8-4ce5-ad2f-71404fb4b716": "Evento_Eliminado",
    "49e58b48-4959-48e8-9074-648656eabaff": "sobreNosotros",
    "4e0d04f7-77a5-4f16-b75a-3f1c16cb2376": "Admin_usuarios",
    "e7cb8619-bdea-4a98-aba2-232d947513f2": "Eventos",
    "78749641-921c-4903-af73-de70f349b7ec": "contacto",
    "5b6a649a-e0f2-4fa4-8261-7f37cffed9b3": "Evento_Apuntado",
    "1d5b0848-74b8-42f5-aa1f-95bd1a89682c": "SalaReservada",
    "e65baf21-7ac3-4b73-954d-881550020dcc": "tarifas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "index",
    "b11c2b54-1e9c-4b30-a949-c1732ceaa738": "Sala_Concreta",
    "279954f7-20a9-4949-bb18-71eed3ace4c1": "GraciasPorRegistrarte",
    "7a60c827-c664-48e3-b0de-bb473f788709": "sing-in",
    "0adc0d0d-d474-4a05-a461-d49d05d59657": "sing-up",
    "c1a6643e-3bbf-4313-a6b2-bc2adc9e7f73": "Index_Admin",
    "8286f656-99b0-4667-95ac-4921eb6d0a9c": "Evento_Concreto",
    "5d1a72e9-e49e-4468-bed8-86a127509c84": "Salas",
    "c7807221-9b89-4640-bab3-359f1b01313c": "Modificar_perfil",
    "86f28c0c-8448-405a-bae4-25992f666bbe": "Index_Usuario",
    "4fcd6761-14c7-431f-a88c-06d9746d49c8": "Perfil",
    "cf0a0bcf-af34-49ca-a386-44cd1ad428bb": "Admin_usuario_eliminado",
    "80dd4def-dd5d-49ee-80c8-04f11dfa38ee": "Admin_usuario_modificado",
    "3d458074-48a2-4300-ace6-fd150e9af1ea": "Evento_Modificado",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
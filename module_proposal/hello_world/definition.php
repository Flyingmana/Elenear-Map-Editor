<?php

class moduleHelloworldDefinition {

    public function __construct($framework) {
        $framework->addJS(__DIR__ . "ressources/test1.js");
        $framework->addCSS(__DIR__ . "ressources/style.css");
    }

    public function handleWebRequest($request, $result) {
        $this->request = $request;
        $this->result = $result;


        $this->handleAction();
        $this->handleView();
    }

    private function handleAction(){
        if($this->request->action == "show_name"){
            $result->variables['name'] = "Fred Feuerstein";
        }else{
            $result->variables['name'] = "";
        }
    }

    private function handleView() {
        switch ($this->request->typ) {
            case 'html':
                $this->result->addJS(__DIR__ . "ressources/test2.js");
                $this->result->addCSS(__DIR__ . "ressources/customStyle.css");
                //bezüglich dem Template hinzufügen hab ich jetzt noch nichts was ich bevorzuge, daher hab ich mich etwa an das gehalten, was ich von ezComponents kenne
                $this->result->addTemplatezone(new ezcMvcTemplateViewHandler('page_content', __DIR__ . 'templates/name.ezt'));

                break;
            case 'json':
                //do nothing, because standard handling for json from framework should be enough
                break;

            default:
                break;
        }
    }

}


var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_3_8_Skin = (function (_super) {
            __extends(Btn_3_8_Skin, _super);
            function Btn_3_8_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i(), this.iconDisplay_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_8_1")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_d")
                    ])
                ];
            }
            var d = __define,c=Btn_3_8_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_3_8_Skin._skinParts;
                }
            );
            p.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_txt_g_state", 0]);
                return t;
            };
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_0_8_0", 0]);
                return t;
            };
            Btn_3_8_Skin._skinParts = ["bg", "iconDisplay"];
            return Btn_3_8_Skin;
        })(egret.gui.Skin);
        comp.Btn_3_8_Skin = Btn_3_8_Skin;
        egret.registerClass(Btn_3_8_Skin,"skins.comp.Btn_3_8_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));

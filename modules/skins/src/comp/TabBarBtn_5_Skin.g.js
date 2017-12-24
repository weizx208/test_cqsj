var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var TabBarBtn_5_Skin = (function (_super) {
            __extends(TabBarBtn_5_Skin, _super);
            function TabBarBtn_5_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.minWidth = 140;
                this.elementsContent = [this.__8_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "btn_cdi_1")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "btn_cdi_0")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "btn_cdi_0")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "btn_cdi_0")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TabBarBtn_5_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TabBarBtn_5_Skin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.elementsContent = [this.__7_i(), this.labelDisplay_i()];
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new g_comp.IcoLabel();
                this.labelDisplay = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_cdi_1", 0]);
                return t;
            };
            TabBarBtn_5_Skin._skinParts = ["labelDisplay"];
            return TabBarBtn_5_Skin;
        })(egret.gui.Skin);
        comp.TabBarBtn_5_Skin = TabBarBtn_5_Skin;
        egret.registerClass(TabBarBtn_5_Skin,"skins.comp.TabBarBtn_5_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));

/* jQuery SelectBox - https://github.com/claviska/jquery-selectBox */
if (jQuery)
    (function ($) {
        $.extend($.fn, {
            selectBox: function (method, data) {
                var typeTimer,
                    typeSearch = "",
                    isMac = navigator.platform.match(/mac/i);
                var init = function (select, data) {
                    var options;
                    if (navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)) return false;
                    if (select.tagName.toLowerCase() !== "select") return false;
                    select = $(select);
                    if (select.data("selectBox-control")) return false;
                    var control = $('<a class="selectBox" />'),
                        inline = select.attr("multiple") || parseInt(select.attr("size")) > 1;
                    var settings = data || {};
                    if (select.attr("name") !== undefined) {
                        var width = (select.attr("name").indexOf("idcor") > -1) ? select.outerWidth() + 20 : select.outerWidth();
                    }    
                    else    
                        var width = select.outerWidth();    
                    control
                        .width(width)
                        .addClass(select.attr("class"))
                        .attr("title", select.attr("title") || "")
                        .attr("tabindex", parseInt(select.attr("tabindex")))
                        .css("display", "flex")
                        .bind("focus.selectBox", function () {
                            if (this !== document.activeElement && document.body !== document.activeElement) $(document.activeElement).blur();
                            if (control.hasClass("selectBox-active")) return;
                            control.addClass("selectBox-active");
                            select.trigger("focus");
                        })
                        .bind("blur.selectBox", function () {
                            if (!control.hasClass("selectBox-active")) return;
                            control.removeClass("selectBox-active");
                            select.trigger("blur");
                        });
                    if (!$(window).data("selectBox-bindings")) {
                        $(window).data("selectBox-bindings", true).bind("scroll.selectBox", hideMenus).bind("resize.selectBox", hideMenus);
                    }
                    if (select.attr("disabled")) control.addClass("selectBox-disabled");
                    select.bind("click.selectBox", function (event) {
                        control.focus();
                        event.preventDefault();
                    });
                    if (inline) {
                        options = getOptions(select, "inline");
                        control
                            .append(options)
                            .data("selectBox-options", options)
                            .addClass("selectBox-inline selectBox-menuShowing")
                            .bind("keydown.selectBox", function (event) {
                                handleKeyDown(select, event);
                            })
                            .bind("keypress.selectBox", function (event) {
                                handleKeyPress(select, event);
                            })
                            .bind("mousedown.selectBox", function (event) {
                                if ($(event.target).is("A.selectBox-inline")) event.preventDefault();
                                if (!control.hasClass("selectBox-focus")) control.focus();
                            })
                            .insertAfter(select);
                        if (!select[0].style.height) {
                            var size = select.attr("size") ? parseInt(select.attr("size")) : 5;
                            var tmp = control.clone().removeAttr("id").css({ position: "absolute", top: "-9999em" }).show().appendTo("body");
                            tmp.find(".selectBox-options").html("<li><a>\u00A0</a></li>");
                            var optionHeight = parseInt(tmp.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
                            tmp.remove();
                            control.height(optionHeight * size);
                        }
                        disableSelection(control);
                    } else {
                        var label = $('<span class="selectBox-label" />'),
                            arrow = $('<span class="selectBox-arrow" />');
                        label.attr("class", getLabelClass(select)).text(getLabelText(select));
                        options = getOptions(select, "dropdown");
                        options.appendTo("BODY");
                        control
                            .data("selectBox-options", options)
                            .addClass("selectBox-dropdown")
                            .append(label)
                            .append(arrow)
                            .bind("mousedown.selectBox", function (event) {
                                if (control.hasClass("selectBox-menuShowing")) {
                                    hideMenus();
                                } else {
                                    event.stopPropagation();
                                    options.data("selectBox-down-at-x", event.screenX).data("selectBox-down-at-y", event.screenY);
                                    showMenu(select);
                                }
                            })
                            .bind("keydown.selectBox", function (event) {
                                handleKeyDown(select, event);
                            })
                            .bind("keypress.selectBox", function (event) {
                                handleKeyPress(select, event);
                            })
                            .bind("open.selectBox", function (event, triggerData) {
                                if (triggerData && triggerData._selectBox === true) return;
                                showMenu(select);
                            })
                            .bind("close.selectBox", function (event, triggerData) {
                                if (triggerData && triggerData._selectBox === true) return;
                                hideMenus();
                            })
                            .insertAfter(select);

                        if (select.attr("name") !== undefined) {
                            if (select.attr("name").indexOf("idcor") > -1) {
                                var cor = $('<span class="selectBox-color" />');
                                (getLabelColor(select) == "sem cor") ? cor.css("display", "none") : cor.attr("alt", getLabelText(select)).css("background-color", getLabelColor(select));
                                
                                control.prepend(cor);
                            }
                        }

                        var labelWidth = control.width() - arrow.outerWidth() - parseInt(label.css("paddingLeft")) - parseInt(label.css("paddingLeft"));
                        label.width(labelWidth);
                        disableSelection(control);
                    }
                    select.addClass("selectBox").data("selectBox-control", control).data("selectBox-settings", settings).hide();
                };
                var getOptions = function (select, type) {
                    var options;
                    var _getOptions = function (select, options) {
                        select.children("OPTION, OPTGROUP").each(function () {
                            if ($(this).is("OPTION")) {
                                if ($(this).length > 0) {
                                    generateOptions($(this), options);
                                } else {
                                    options.append("<li>\u00A0</li>");
                                }
                            } else {
                                var optgroup = $('<li class="selectBox-optgroup" />');
                                optgroup.text($(this).attr("label"));
                                options.append(optgroup);
                                options = _getOptions($(this), options);
                            }
                        });
                        return options;
                    };
                    switch (type) {
                        case "inline":
                            options = $('<ul class="selectBox-options" />');
                            options = _getOptions(select, options);
                            options
                                .find("A")
                                .bind("mouseover.selectBox", function (event) {
                                    addHover(select, $(this).parent());
                                })
                                .bind("mouseout.selectBox", function (event) {
                                    removeHover(select, $(this).parent());
                                })
                                .bind("mousedown.selectBox", function (event) {
                                    event.preventDefault();
                                    if (!select.selectBox("control").hasClass("selectBox-active")) select.selectBox("control").focus();
                                })
                                .bind("mouseup.selectBox", function (event) {
                                    hideMenus();
                                    selectOption(select, $(this).parent(), event);
                                });
                            disableSelection(options);
                            return options;
                        case "dropdown":
                            options = $('<ul class="selectBox-dropdown-menu selectBox-options" />');
                            options = _getOptions(select, options);
                            options
                                .data("selectBox-select", select)
                                .css("display", "none")
                                .appendTo("BODY")
                                .find("A")
                                .bind("mousedown.selectBox", function (event) {
                                    event.preventDefault();
                                    if (event.screenX === options.data("selectBox-down-at-x") && event.screenY === options.data("selectBox-down-at-y")) {
                                        options.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");
                                        hideMenus();
                                    }
                                })
                                .bind("mouseup.selectBox", function (event) {
                                    if (event.screenX === options.data("selectBox-down-at-x") && event.screenY === options.data("selectBox-down-at-y")) {
                                        return;
                                    } else {
                                        options.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");
                                    }
                                    selectOption(select, $(this).parent());
                                    hideMenus();
                                })
                                .bind("mouseover.selectBox", function (event) {
                                    addHover(select, $(this).parent());
                                })
                                .bind("mouseout.selectBox", function (event) {
                                    removeHover(select, $(this).parent());
                                });
                            var classes = select.attr("class") || "";
                            if (classes !== "") {
                                classes = classes.split(" ");
                                for (var i in classes) options.addClass(classes[i] + "-selectBox-dropdown-menu");
                            }
                            disableSelection(options);
                            return options;
                    }
                };
                var getLabelClass = function (select) {
                    var selected = $(select).find("OPTION:selected");
                    return ("selectBox-label " + (selected.attr("class") || "")).replace(/\s+$/, "");
                };
                var getLabelText = function (select) {
                    var selected = $(select).find("OPTION:selected");
                    return selected.text() || "\u00A0";
                };
                var getLabelColor = function (select) {
                    var selected = $(select).find("OPTION:selected");
                    if (selected.attr("color") === undefined)
                        return "sem cor";
                    else
                        return selected.attr("color") || "colorido";  
                };
                var setLabel = function (select) {
                    select = $(select);
                    var control = select.data("selectBox-control");
                    if (!control) return;
                    if (select.attr("name") !== undefined) {
                        if (select.attr("name").indexOf("idcor") > -1) {
                            switch (getLabelColor(select)) {
                                case "sem cor":
                                    control.find(".selectBox-color").hide();
                                    break;
                                case "colorido":
                                    control.find(".selectBox-color").show().addClass("colorido").css("background-color", "");
                                    break;
                                default:
                                    control.find(".selectBox-color").removeClass("colorido").show().attr("alt", getLabelText(select)).css("background-color", getLabelColor(select));
                                    break;
                            }
                        }   
                    }
                };
                var destroy = function (select) {
                    select = $(select);
                    var control = select.data("selectBox-control");
                    if (!control) return;
                    var options = control.data("selectBox-options");
                    options.remove();
                    control.remove();
                    select.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show();
                };
                var refresh = function (select) {
                    select = $(select);
                    select.selectBox("options", select.html());
                };
                var showMenu = function (select) {
                    select = $(select);
                    var control = select.data("selectBox-control"),
                        settings = select.data("selectBox-settings"),
                        options = control.data("selectBox-options");
                    if (control.hasClass("selectBox-disabled")) return false;
                    hideMenus();
                    var borderBottomWidth = isNaN(control.css("borderBottomWidth")) ? 0 : parseInt(control.css("borderBottomWidth"));
                    options.width(control.innerWidth()).css({ top: control.offset().top + control.outerHeight() - borderBottomWidth, left: control.offset().left });
                    if (select.triggerHandler("beforeopen")) return false;
                    var dispatchOpenEvent = function () {
                        select.triggerHandler("open", { _selectBox: true });
                    };
                    switch (settings.menuTransition) {
                        case "fade":
                            options.fadeIn(settings.menuSpeed, dispatchOpenEvent);
                            break;
                        case "slide":
                            options.slideDown(settings.menuSpeed, dispatchOpenEvent);
                            break;
                        default:
                            options.show(settings.menuSpeed, dispatchOpenEvent);
                            break;
                    }
                    if (!settings.menuSpeed) dispatchOpenEvent();
                    var li = options.find(".selectBox-selected:first");
                    keepOptionInView(select, li, true);
                    addHover(select, li);
                    control.addClass("selectBox-menuShowing");
                    $(document).bind("mousedown.selectBox", function (event) {
                        if ($(event.target).parents().andSelf().hasClass("selectBox-options")) return;
                        hideMenus();
                    });
                };
                var hideMenus = function () {
                    if ($(".selectBox-dropdown-menu:visible").length === 0) return;
                    $(document).unbind("mousedown.selectBox");
                    $(".selectBox-dropdown-menu").each(function () {
                        var options = $(this),
                            select = options.data("selectBox-select"),
                            control = select.data("selectBox-control"),
                            settings = select.data("selectBox-settings");
                        if (select.triggerHandler("beforeclose")) return false;
                        var dispatchCloseEvent = function () {
                            select.triggerHandler("close", { _selectBox: true });
                        };
                        if (settings) {
                            switch (settings.menuTransition) {
                                case "fade":
                                    options.fadeOut(settings.menuSpeed, dispatchCloseEvent);
                                    break;
                                case "slide":
                                    options.slideUp(settings.menuSpeed, dispatchCloseEvent);
                                    break;
                                default:
                                    options.hide(settings.menuSpeed, dispatchCloseEvent);
                                    break;
                            }
                            if (!settings.menuSpeed) dispatchCloseEvent();
                            control.removeClass("selectBox-menuShowing");
                        } else {
                            $(this).hide();
                            $(this).triggerHandler("close", { _selectBox: true });
                            $(this).removeClass("selectBox-menuShowing");
                        }
                    });
                };
                var selectOption = function (select, li, event) {
                    select = $(select);
                    li = $(li);
                    var control = select.data("selectBox-control"),
                        settings = select.data("selectBox-settings");
                    if (control.hasClass("selectBox-disabled")) return false;
                    if (li.length === 0 || li.hasClass("selectBox-disabled")) return false;
                    if (select.attr("multiple")) {
                        if (event.shiftKey && control.data("selectBox-last-selected")) {
                            li.toggleClass("selectBox-selected");
                            var affectedOptions;
                            if (li.index() > control.data("selectBox-last-selected").index()) {
                                affectedOptions = li.siblings().slice(control.data("selectBox-last-selected").index(), li.index());
                            } else {
                                affectedOptions = li.siblings().slice(li.index(), control.data("selectBox-last-selected").index());
                            }
                            affectedOptions = affectedOptions.not(".selectBox-optgroup, .selectBox-disabled");
                            if (li.hasClass("selectBox-selected")) {
                                affectedOptions.addClass("selectBox-selected");
                            } else {
                                affectedOptions.removeClass("selectBox-selected");
                            }
                        } else if ((isMac && event.metaKey) || (!isMac && event.ctrlKey)) {
                            li.toggleClass("selectBox-selected");
                        } else {
                            li.siblings().removeClass("selectBox-selected");
                            li.addClass("selectBox-selected");
                        }
                    } else {
                        li.siblings().removeClass("selectBox-selected");
                        li.addClass("selectBox-selected");
                    }
                    if (control.hasClass("selectBox-dropdown")) {
                        control.find(".selectBox-label").text(li.text());
                    }
                    var i = 0,
                        selection = [];
                    if (select.attr("multiple")) {
                        control.find(".selectBox-selected A").each(function () {
                            selection[i++] = $(this).attr("rel");
                        });
                    } else {
                        selection = li.find("A").attr("rel");
                    }
                    control.data("selectBox-last-selected", li);
                    if (select.val() !== selection) {
                        select.val(selection);
                        setLabel(select);
                        select.trigger("change");
                    }
                    return true;
                };
                var addHover = function (select, li) {
                    select = $(select);
                    li = $(li);
                    var control = select.data("selectBox-control"),
                        options = control.data("selectBox-options");
                    options.find(".selectBox-hover").removeClass("selectBox-hover");
                    li.addClass("selectBox-hover");
                };
                var removeHover = function (select, li) {
                    select = $(select);
                    li = $(li);
                    var control = select.data("selectBox-control"),
                        options = control.data("selectBox-options");
                    options.find(".selectBox-hover").removeClass("selectBox-hover");
                };
                var keepOptionInView = function (select, li, center) {
                    if (!li || li.length === 0) return;
                    select = $(select);
                    var control = select.data("selectBox-control"),
                        options = control.data("selectBox-options"),
                        scrollBox = control.hasClass("selectBox-dropdown") ? options : options.parent(),
                        top = parseInt(li.offset().top - scrollBox.position().top),
                        bottom = parseInt(top + li.outerHeight());
                    if (center) {
                        scrollBox.scrollTop(li.offset().top - scrollBox.offset().top + scrollBox.scrollTop() - scrollBox.height() / 2);
                    } else {
                        if (top < 0) {
                            scrollBox.scrollTop(li.offset().top - scrollBox.offset().top + scrollBox.scrollTop());
                        }
                        if (bottom > scrollBox.height()) {
                            scrollBox.scrollTop(li.offset().top + li.outerHeight() - scrollBox.offset().top + scrollBox.scrollTop() - scrollBox.height());
                        }
                    }
                };
                var handleKeyDown = function (select, event) {
                    select = $(select);
                    var control = select.data("selectBox-control"),
                        options = control.data("selectBox-options"),
                        settings = select.data("selectBox-settings"),
                        totalOptions = 0,
                        i = 0;
                    if (control.hasClass("selectBox-disabled")) return;
                    switch (event.keyCode) {
                        case 8:
                            event.preventDefault();
                            typeSearch = "";
                            break;
                        case 9:
                        case 27:
                            hideMenus();
                            removeHover(select);
                            break;
                        case 13:
                            if (control.hasClass("selectBox-menuShowing")) {
                                selectOption(select, options.find("LI.selectBox-hover:first"), event);
                                if (control.hasClass("selectBox-dropdown")) hideMenus();
                            } else {
                                showMenu(select);
                            }
                            break;
                        case 38:
                        case 37:
                            event.preventDefault();
                            if (control.hasClass("selectBox-menuShowing")) {
                                var prev = options.find(".selectBox-hover").prev("LI");
                                totalOptions = options.find("LI:not(.selectBox-optgroup)").length;
                                i = 0;
                                while (prev.length === 0 || prev.hasClass("selectBox-disabled") || prev.hasClass("selectBox-optgroup")) {
                                    prev = prev.prev("LI");
                                    if (prev.length === 0) {
                                        if (settings.loopOptions) {
                                            prev = options.find("LI:last");
                                        } else {
                                            prev = options.find("LI:first");
                                        }
                                    }
                                    if (++i >= totalOptions) break;
                                }
                                addHover(select, prev);
                                selectOption(select, prev, event);
                                keepOptionInView(select, prev);
                            } else {
                                showMenu(select);
                            }
                            break;
                        case 40:
                        case 39:
                            event.preventDefault();
                            if (control.hasClass("selectBox-menuShowing")) {
                                var next = options.find(".selectBox-hover").next("LI");
                                totalOptions = options.find("LI:not(.selectBox-optgroup)").length;
                                i = 0;
                                while (next.length === 0 || next.hasClass("selectBox-disabled") || next.hasClass("selectBox-optgroup")) {
                                    next = next.next("LI");
                                    if (next.length === 0) {
                                        if (settings.loopOptions) {
                                            next = options.find("LI:first");
                                        } else {
                                            next = options.find("LI:last");
                                        }
                                    }
                                    if (++i >= totalOptions) break;
                                }
                                addHover(select, next);
                                selectOption(select, next, event);
                                keepOptionInView(select, next);
                            } else {
                                showMenu(select);
                            }
                            break;
                    }
                };
                var handleKeyPress = function (select, event) {
                    select = $(select);
                    var control = select.data("selectBox-control"),
                        options = control.data("selectBox-options");
                    if (control.hasClass("selectBox-disabled")) return;
                    switch (event.keyCode) {
                        case 9:
                        case 27:
                        case 13:
                        case 38:
                        case 37:
                        case 40:
                        case 39:
                            break;
                        default:
                            if (!control.hasClass("selectBox-menuShowing")) showMenu(select);
                            event.preventDefault();
                            clearTimeout(typeTimer);
                            typeSearch += String.fromCharCode(event.charCode || event.keyCode);
                            options.find("A").each(function () {
                                if ($(this).text().substr(0, typeSearch.length).toLowerCase() === typeSearch.toLowerCase()) {
                                    addHover(select, $(this).parent());
                                    keepOptionInView(select, $(this).parent());
                                    return false;
                                }
                            });
                            typeTimer = setTimeout(function () {
                                typeSearch = "";
                            }, 1000);
                            break;
                    }
                };
                var enable = function (select) {
                    select = $(select);
                    select.attr("disabled", false);
                    var control = select.data("selectBox-control");
                    if (!control) return;
                    control.removeClass("selectBox-disabled");
                };
                var disable = function (select) {
                    select = $(select);
                    select.attr("disabled", true);
                    var control = select.data("selectBox-control");
                    if (!control) return;
                    control.addClass("selectBox-disabled");
                };
                var setValue = function (select, value) {
                    select = $(select);
                    select.val(value);
                    value = select.val();
                    if (value === null) {
                        value = select.children().first().val();
                        select.val(value);
                    }
                    var control = select.data("selectBox-control");
                    if (!control) return;
                    var settings = select.data("selectBox-settings"),
                        options = control.data("selectBox-options");
                    setLabel(select);
                    options.find(".selectBox-selected").removeClass("selectBox-selected");
                    options.find("A").each(function () {
                        if (typeof value === "object") {
                            for (var i = 0; i < value.length; i++) {
                                if ($(this).attr("rel") == value[i]) {
                                    $(this).parent().addClass("selectBox-selected");
                                }
                            }
                        } else {
                            if ($(this).attr("rel") == value) {
                                $(this).parent().addClass("selectBox-selected");
                            }
                        }
                    });
                    if (settings.change) settings.change.call(select);
                };
                var setOptions = function (select, options) {
                    select = $(select);
                    var control = select.data("selectBox-control"),
                        settings = select.data("selectBox-settings");
                    switch (typeof data) {
                        case "string":
                            select.html(data);
                            break;
                        case "object":
                            select.html("");
                            for (var i in data) {
                                if (data[i] === null) continue;
                                if (typeof data[i] === "object") {
                                    var optgroup = $('<optgroup label="' + i + '" />');
                                    for (var j in data[i]) {
                                        optgroup.append('<option value="' + j + '">' + data[i][j] + "</option>");
                                    }
                                    select.append(optgroup);
                                } else {
                                    var option = $('<option value="' + i + '">' + data[i] + "</option>");
                                    select.append(option);
                                }
                            }
                            break;
                    }
                    if (!control) return;
                    control.data("selectBox-options").remove();
                    var type = control.hasClass("selectBox-dropdown") ? "dropdown" : "inline";
                    options = getOptions(select, type);
                    control.data("selectBox-options", options);
                    switch (type) {
                        case "inline":
                            control.append(options);
                            break;
                        case "dropdown":
                            setLabel(select);
                            $("BODY").append(options);
                            break;
                    }
                };
                var disableSelection = function (selector) {
                    $(selector)
                        .css("MozUserSelect", "none")
                        .bind("selectstart", function (event) {
                            event.preventDefault();
                        });
                };
                var generateOptions = function (self, options) {
                    var li = $("<li />"),
                        span = $("<span />"),
                        a = $("<a />");
                    li.addClass(self.attr("class"));
                    li.data(self.data());
                    a.attr("rel", self.val()).text(self.text());
                    li.append(a);
                    if (self.attr("disabled")) li.addClass("selectBox-disabled");
                    if (self.attr("selected")) li.addClass("selectBox-selected");
                    if (self.attr("color") !== undefined) {
                        if (self.attr("color"))
                            span.attr("alt", self.text()).css("background-color", self.attr("color"));
                        else
                            span.addClass("colorido");  
                        a.prepend(span);
                    } 
                    options.append(li);
                };
                switch (method) {
                    case "control":
                        return $(this).data("selectBox-control");
                    case "settings":
                        if (!data) return $(this).data("selectBox-settings");
                        $(this).each(function () {
                            $(this).data("selectBox-settings", $.extend(true, $(this).data("selectBox-settings"), data));
                        });
                        break;
                    case "options":
                        if (data === undefined) return $(this).data("selectBox-control").data("selectBox-options");
                        $(this).each(function () {
                            setOptions(this, data);
                        });
                        break;
                    case "value":
                        if (data === undefined) return $(this).val();
                        $(this).each(function () {
                            setValue(this, data);
                        });
                        break;
                    case "refresh":
                        $(this).each(function () {
                            refresh(this);
                        });
                        break;
                    case "enable":
                        $(this).each(function () {
                            enable(this);
                        });
                        break;
                    case "disable":
                        $(this).each(function () {
                            disable(this);
                        });
                        break;
                    case "destroy":
                        $(this).each(function () {
                            destroy(this);
                        });
                        break;
                    default:
                        $(this).each(function () {
                            init(this, method);
                        });
                        break;
                }
                return $(this);
            },
        });
    })(jQuery);

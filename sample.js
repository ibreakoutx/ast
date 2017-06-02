var arr = [1, 2, 3,];
var arr2 = ['a', 'b', 'c'];

var obj = {
  'a' : 1,
  'b' : 2,
};

var obj2 = {
  'a' : 3,
  'b' : 4
};

module.exports = {
    _isLinkedToArray: 'annotation',

    visible: {
        valType: 'boolean',

        dflt: true,

    },

    text: {
        valType: 'string',


    },
    textangle: {
        valType: 'angle',
        dflt: 0,


    },
    font: extendFlat({}, fontAttrs, {

    }),
    width: {
        valType: 'number',
        min: 1,
        dflt: null,


    },
    height: {
        valType: 'number',
        min: 1,
        dflt: null,


    },
    opacity: {
        valType: 'number',
        min: 0,
        max: 1,
        dflt: 1,


    },
    align: {
        valType: 'enumerated',
        values: ['left', 'center', 'right'],
        dflt: 'center',


    },
    valign: {
        valType: 'enumerated',
        values: ['top', 'middle', 'bottom'],
        dflt: 'middle',


    },
    bgcolor: {
        valType: 'color',
        dflt: 'rgba(0,0,0,0)',


    },
    bordercolor: {
        valType: 'color',
        dflt: 'rgba(0,0,0,0)',


    },
    borderpad: {
        valType: 'number',
        min: 0,
        dflt: 1,


    },
    borderwidth: {
        valType: 'number',
        min: 0,
        dflt: 1,


    },
    // arrow
    showarrow: {
        valType: 'boolean',
        dflt: true,


    },
    arrowcolor: {
        valType: 'color',


    },
    arrowhead: {
        valType: 'integer',
        min: 0,
        max: ARROWPATHS.length,
        dflt: 1,


    },
    arrowsize: {
        valType: 'number',
        min: 0.3,
        dflt: 1,


    },
    arrowwidth: {
        valType: 'number',
        min: 0.1,


    },
    standoff: {
        valType: 'number',
        min: 0,
        dflt: 0,


    },
    ax: {
        valType: 'any',


    },
    ay: {
        valType: 'any',


    },
    axref: {
        valType: 'enumerated',
        dflt: 'pixel',
        values: [
            'pixel',
            cartesianConstants.idRegex.x.toString()
        ],


    },
    ayref: {
        valType: 'enumerated',
        dflt: 'pixel',
        values: [
            'pixel',
            cartesianConstants.idRegex.y.toString()
        ],


    },
    // positioning
    xref: {
        valType: 'enumerated',
        values: [
            'paper',
            cartesianConstants.idRegex.x.toString()
        ],


    },
    x: {
        valType: 'any',


    },
    xanchor: {
        valType: 'enumerated',
        values: ['auto', 'left', 'center', 'right'],
        dflt: 'auto',


    },
    xshift: {
        valType: 'number',
        dflt: 0,


    },
    yref: {
        valType: 'enumerated',
        values: [
            'paper',
            cartesianConstants.idRegex.y.toString()
        ],


    },
    y: {
        valType: 'any',


    },
    yanchor: {
        valType: 'enumerated',
        values: ['auto', 'top', 'middle', 'bottom'],
        dflt: 'auto',


    },
    yshift: {
        valType: 'number',
        dflt: 0,


    },
    clicktoshow: {
        valType: 'enumerated',
        values: [false, 'onoff', 'onout'],
        dflt: false,


    },
    xclick: {
        valType: 'any',


    },
    yclick: {
        valType: 'any',


    },
    hovertext: {
        valType: 'string',


    },
    hoverlabel: {
        bgcolor: {
            valType: 'color',


        },
        bordercolor: {
            valType: 'color',


        },
        font: extendFlat({}, fontAttrs, {

        })
    },
    captureevents: {
        valType: 'boolean',


    },

    _deprecated: {
        ref: {
            valType: 'string',


        }
    }
};

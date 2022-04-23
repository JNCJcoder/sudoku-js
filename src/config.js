// SCREEN
const SCREEN_WIDTH      = 500;
const SCREEN_HEIGHT     = 500;

// MATRIX
const MATRIX_SCALE      = 55;
const MATRIX_HALF_SCALE = (MATRIX_SCALE / 2) | 0;
const MATRIX_WIDTH      = (SCREEN_WIDTH / MATRIX_SCALE) | 0;
const MATRIX_HEIGHT     = (SCREEN_HEIGHT / MATRIX_SCALE) | 0;

// CONTEXT
const CONTEXT_FONT_SIZE     = '45px';
const CONTEXT_FONT_FAMILY   = 'serif';
const CONTEXT_TEXT_ALIGN    = 'center';
const CONTEXT_FONT          = `${CONTEXT_FONT_SIZE} ${CONTEXT_FONT_FAMILY}`;


module.exports = 
{
    SCREEN:
    {
        WIDTH:  SCREEN_WIDTH,
        HEIGHT: SCREEN_HEIGHT,
    },
    MATRIX:
    {
        WIDTH:      MATRIX_WIDTH,
        HEIGHT:     MATRIX_HEIGHT,
        SCALE:      MATRIX_SCALE,
        HALF_SCALE: MATRIX_HALF_SCALE
    },
    CONTEXT:
    {
        FONT:       CONTEXT_FONT,
        TEXT_ALIGN: CONTEXT_TEXT_ALIGN
    }
};
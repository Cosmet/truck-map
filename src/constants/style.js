export const colors = {
  lightGray: '#f0f0f0',
};

export const mixins = {
  border(width, style, color, direction) {
    direction = direction.toLowerCase();

    switch (direction) {
      case 'top':
        return {
          borderTopWidth: width,
          borderTopStyle: style,
          borderTopColor: color,
        }
      case 'right':
        return {
          borderRightWidth: width,
          borderRightStyle: style,
          borderRightColor: color,
        }
      case 'bottom':
        return {
          borderBottomWidth: width,
          borderBottomStyle: style,
          borderBottomColor: color,
        }
      case 'left':
        return {
          borderLeftWidth: width,
          borderLeftStyle: style,
          borderLeftColor: color,
        }
      default:
        return {
          borderWidth: width,
          borderStyle: style,
          borderColor: color
        }
    }
  },
};

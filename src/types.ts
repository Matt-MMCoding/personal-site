/**
 * Used for Styled-Component transient props which requires an appended "$" to
 * prevent it from being passed down to the underlying html element
 */
export type StyledTransientName<P extends string> = `$${P}`;

/**
 * Used to map a given Prop Type's (T) keys to the same name prefixed with "$".
 * This is useful for easily creating Styled-Component transient props which prevents
 * the component from passing the value to the underlying html element.
 */
export type StyledTransientProps<T> = {
  [Property in keyof T as StyledTransientName<string & Property>]: T[Property];
};

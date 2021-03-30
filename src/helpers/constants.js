/* APP CONSTANTS
 * =================================================
 *  */
export const AUTH_KEY_NAME = '_atck';
export const REFRESH_KEY_NAME = '_rftcn';
export const USER_ID = 'UID';
export const ORGANIZATION_ID = 'OID';

/* ERROR CONSTANTS & EXPRESSIONS
 * =================================================
 *  */

export const PHONE_REGULAR_EXPRESSION = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
export const CAMPAIGN_NAME = /^[a-z,.'-\s]+$/i;
export const NUMBER_ONLY = /^[0-9\s]*$/;
export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,30}$/;

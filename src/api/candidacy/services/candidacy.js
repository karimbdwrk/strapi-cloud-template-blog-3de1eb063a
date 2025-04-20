'use strict';

/**
 * candidacy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::candidacy.candidacy');

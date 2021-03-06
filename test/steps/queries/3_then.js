/*
 * LiskHQ/lisky
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import {
	getFirstQuotedString,
} from '../utils';

export function theQueryInstanceShouldHaveTheLiskAPIInstanceAsAClient() {
	const { queryInstance, liskAPIInstance } = this.test.ctx;
	return (queryInstance).should.have.property('client').equal(liskAPIInstance);
}

export function theQueryInstanceShouldHaveAHandlerFor() {
	const { queryInstance } = this.test.ctx;
	const item = getFirstQuotedString(this.test.title);
	return (queryInstance.handlers).should.have.property(item).be.Function();
}

export function itShouldResolveToTheResultOfTheQuery() {
	const { returnValue, queryResult } = this.test.ctx;
	return (returnValue).should.be.fulfilledWith(queryResult);
}

export function itShouldResolveToAnArrayOfQueryResults() {
	const { returnValue, inputs, queryResult } = this.test.ctx;
	const arrayOfQueryResults = inputs.map(() => queryResult);
	return (returnValue).should.be.fulfilledWith(arrayOfQueryResults);
}

export function theResultShouldBeReturned() {
	const { returnValue, result } = this.test.ctx;
	return (returnValue).should.equal(result);
}

export function theResultStrippedOfANSICodesShouldBeReturned() {
	const { returnValue, resultWithoutANSICodes } = this.test.ctx;
	return (returnValue).should.eql(resultWithoutANSICodes);
}

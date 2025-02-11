/**
 * Manage
 *
 * Main export of @ouroboros/manage module
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2025-02-08
 */

// Ouroboros modules
import { Service } from '@ouroboros/body';

// Import and re-export module files
export * as errors from './errors';

// Create an instance of Service and export it as default
const manage = new Service('manage');
export default manage;
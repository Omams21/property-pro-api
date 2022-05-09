import { testEnvironmentVariable } from '../../../Desktop/property-pro-api/src/settings';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });

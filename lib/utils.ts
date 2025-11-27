import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the CloudFront URL for a media asset
 * @param path - The path to the asset (e.g., '/assets/images/logo.svg' or '/assets/videos/intro.mp4')
 * @returns The full CloudFront URL or the local path if CloudFront is not configured
 */
export function getMediaUrl(path: string): string {
  // If CloudFront domain is configured, use it
  const cloudfrontDomain = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DOMAIN;
  if (cloudfrontDomain) {
    // Map /assets/images/ to images/ and /assets/videos/ to videos/ for S3 structure
    let s3Path = path;
    if (path.startsWith('/assets/images/')) {
      s3Path = path.replace('/assets/images/', 'images/');
    } else if (path.startsWith('/assets/videos/')) {
      s3Path = path.replace('/assets/videos/', 'videos/');
    } else if (path.startsWith('assets/images/')) {
      s3Path = path.replace('assets/images/', 'images/');
    } else if (path.startsWith('assets/videos/')) {
      s3Path = path.replace('assets/videos/', 'videos/');
    } else {
      // Remove leading slash if present
      s3Path = path.startsWith('/') ? path.slice(1) : path;
    }
    return `${cloudfrontDomain}/${s3Path}`;
  }

  // Fallback to local path
  return path;
}

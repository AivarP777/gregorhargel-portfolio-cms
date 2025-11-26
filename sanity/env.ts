const assertValue = <T>(v: T | undefined | null, errorMessage: string): T => {
  if (!v) {
    throw new Error(errorMessage)
  }
  return v
}

// Proovime mõlemat prefixit: NEXT_PUBLIC_ (Next) ja SANITY_STUDIO_ (Studio)
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_STUDIO_PROJECT_ID'
)

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET or SANITY_STUDIO_DATASET'
)

// API versiooni võid jätta nii:
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-10-01'

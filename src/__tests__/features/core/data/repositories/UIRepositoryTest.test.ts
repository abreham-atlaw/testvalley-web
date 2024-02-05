import Banner from "@/features/core/data/models/Banner";
import Collection from "@/features/core/data/models/Collection";
import Shortcut from "@/features/core/data/models/Shortcut";
import UIRepository from "@/features/core/data/repositories/UIRepository";
import { beforeEach, describe, test, expect, assertType } from "vitest";


describe(
    "UIRepository Test",
    () => {
        let repo: UIRepository;

        beforeEach(() => {
            repo = new UIRepository();
        })

        test(
            "Get All Banners",
            async () => {
                const banners = await repo.getAllBanners();
                assertType<Array<Banner>>(banners);
                expect(banners.length).toBeGreaterThan(0);
                console.log(banners);
            }
        )

        test(
            "Get All Shortcuts",
            async () => {
                const shortcuts = await repo.getAllShortcts();
                assertType<Array<Shortcut>>(shortcuts);
                expect(shortcuts.length).toBeGreaterThan(0);
                console.log(shortcuts);
            }
        )

        test(
            "Get Collections",
            async () => {
                const collections = await repo.getSingleTileCollections();
                assertType<Array<Collection>>(collections);
                expect(collections.length).toBeGreaterThan(0);
                console.log(collections);
            }
        )

        
    }
)
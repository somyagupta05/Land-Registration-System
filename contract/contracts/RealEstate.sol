// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract RealEstate {
    struct Property {
        uint256 productID;
        address owner;
        uint256 price;
        string propertyTitle;
        string category;
        string images;
        string propertyAddress;
        string description;
        address[] reviewers;
        string[] reviews;
    }

    address payable contractOwner =
        payable(0xb309098bcB51E5C687a16FA41bD6055f47c9eBb0);
    uint256 public listingPrice = 0.025 ether;
    mapping(uint256 => Property) private properties;
    uint256 public propertyIndex;

    event PropertyListed(
        uint256 indexed id,
        address indexed owner,
        uint256 price
    );
    event PropertySold(
        uint256 indexed id,
        address indexed oldOwner,
        address indexed newOwner,
        uint256 price
    );
    event PropertyResold(
        uint256 indexed id,
        address indexed oldOwner,
        address indexed newOwner,
        uint256 price
    );

    //REVIEWS MODEL
    struct Review {
        address reviewer;
        uint256 productId;
        uint8 rating;
        string comment;
        uint256 likes;
        uint256 reviewIndex;
    }

    struct Product {
        uint256 productId;
        uint256 totalRating;
        uint256 numReviews;
    }

    mapping(uint256 => Review[]) private reviews;
    mapping(address => uint256[]) private userReviews;
    mapping(uint256 => Product) private products;

    uint256 public reviewsCounter;

    event ReviewAdded(
        uint256 indexed productId,
        address indexed reviewer,
        uint8 rating,
        string comment
    );
    event ReviewLiked(
        uint256 indexed productId,
        uint256 indexed reviewIndex,
        address indexed liker,
        uint256 likes
    );
    //END OF REVIEWS

    modifier onlyOwner() {
        require(
            msg.sender == contractOwner,
            "only owner of the contract can change the listing price"
        );
        _;
    }

    function listProperty(
        address owner,
        uint256 price,
        string memory _propertyTitle,
        string memory _category,
        string memory _images,
        string memory _propertyAddress,
        string memory _description
    )
        external
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(price > 0, "Price must be greater than 0.");
        propertyIndex++;
        uint256 productId = propertyIndex;
        Property storage property = properties[productId];

        property.productID = productId;
        property.owner = owner;
        property.price = price;
        property.propertyTitle = _propertyTitle;
        property.category = _category;
        property.images = _images;
        property.propertyAddress = _propertyAddress;
        property.description = _description;

        emit PropertyListed(productId, owner, price);

        return (productId, _propertyTitle, _description, _images, _category);
    }

    function updateProperty(
        address owner,
        uint256 productId,
        string memory _propertyTitle,
        string memory _category,
        string memory _images,
        string memory _propertyAddress,
        string memory _description
    )
        external
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Property storage property = properties[productId];
        require(property.owner == owner, "You are not an owner");
        property.propertyTitle = _propertyTitle;
        property.category = _category;
        property.images = _images;
        property.propertyAddress = _propertyAddress;
        property.description = _description;

        return (
            productId,
            _propertyTitle,
            _description,
            _images,
            _category,
            _propertyAddress
        );
    }

    function updatePrice(
        address owner,
        uint256 productId,
        uint256 price
    ) external returns (string memory) {
        Property storage property = properties[productId];
        require(property.owner == owner, "You are not an owner");

        property.price = price;

        return "Your Property Price Is Updated";
    }

    function buyProperty(uint256 id, address buyer) external payable {
        uint256 amount = msg.value;

        require(amount == properties[id].price, "Insufficient funds.");

        Property storage property = properties[id];

        (bool sent, ) = payable(property.owner).call{value: amount}("");

        if (sent) {
            property.owner = buyer;
            emit PropertySold(id, property.owner, buyer, amount);
        }
    }

    function getAllProperties() public view returns (Property[] memory) {
        uint256 itemCount = propertyIndex;
        uint256 currentIndex = 0;

        Property[] memory items = new Property[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            Property storage currentItem = properties[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return items;
    }

    function getProperty(
        uint256 id
    )
        external
        view
        returns (
            uint256,
            address,
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            address[] memory,
            string[] memory
        )
    {
        Property memory property = properties[id];
        return (
            property.productID,
            property.owner,
            property.price,
            property.propertyTitle,
            property.category,
            property.images,
            property.propertyAddress,
            property.description,
            property.reviewers,
            property.reviews
        );
    }

    function getUserProperties(
        address user
    ) external view returns (Property[] memory) {
        uint256 totalItemCount = propertyIndex;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (properties[i + 1].owner == user) {
                itemCount += 1;
            }
        }

        Property[] memory items = new Property[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (properties[i + 1].owner == user) {
                uint256 currentId = i + 1;
                Property storage currentItem = properties[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //REVIEWS FUNCTION
    function addReview(
        uint256 productId,
        uint8 rating,
        string calldata comment,
        address user
    ) external {
        require(rating >= 1 && rating <= 5, "Rating must be between 1 and 5.");
        //PROPERTY
        Property storage property = properties[productId];

        property.reviewers.push(user);
        property.reviews.push(comment);

        //REVIEW
        reviewsCounter;
        reviews[productId].push(
            Review(user, productId, rating, comment, 0, reviewsCounter)
        );
        userReviews[user].push(productId);
        products[productId].totalRating += rating;
        products[productId].numReviews++;
        emit ReviewAdded(productId, user, rating, comment);
        reviewsCounter++;
    }

    function getProductReviews(
        uint256 productId
    ) external view returns (Review[] memory) {
        return reviews[productId];
    }

    function getUserReviews(
        address user
    ) external view returns (Review[] memory) {
        uint256 totalReviews = userReviews[user].length;
        Review[] memory userProductReviews = new Review[](totalReviews);
        for (uint256 i = 0; i < userReviews[user].length; i++) {
            uint256 productId = userReviews[user][i];
            Review[] memory productReviews = reviews[productId];
            for (uint256 j = 0; j < productReviews.length; j++) {
                if (productReviews[j].reviewer == user) {
                    userProductReviews[i] = productReviews[j];
                }
            }
        }
        return userProductReviews;
    }

    function likeReview(
        uint256 productId,
        uint256 reviewIndex,
        address user
    ) external {
        Review storage review = reviews[productId][reviewIndex];
        review.likes++;
        emit ReviewLiked(productId, reviewIndex, user, review.likes);
    }

    function getHighestRatedProduct() external view returns (uint256) {
        uint256 highestRating = 0;
        uint256 highestRatedProductId = 0;
        for (uint256 i = 0; i < reviewsCounter; i++) {
            uint256 productId = i + 1;
            if (products[productId].numReviews > 0) {
                uint256 avgRating = products[productId].totalRating /
                    products[productId].numReviews;
                if (avgRating > highestRating) {
                    highestRating = avgRating;
                    highestRatedProductId = productId;
                }
            }
        }
        return highestRatedProductId;
    }

    //RETURN LISTING PRICE
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }
    /* Updates the listing price of the contract */
    function updateListingPrice(
        uint256 _listingPrice,
        address owner
    ) public payable onlyOwner {
        require(
            contractOwner == owner,
            "Only contract owner can update listing price."
        );
        listingPrice = _listingPrice;
    }
}
